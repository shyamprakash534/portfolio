#!/usr/bin/env python3
"""Remove the small fixed Gemini sparkle mark from the portfolio hero video."""
from pathlib import Path
import os
import subprocess
import tempfile

import cv2
import numpy as np

video_path = Path("public/hero-video.mp4")
if not video_path.exists():
    raise FileNotFoundError(video_path)

capture = cv2.VideoCapture(str(video_path))
if not capture.isOpened():
    raise RuntimeError(f"Could not open {video_path}")

fps = capture.get(cv2.CAP_PROP_FPS) or 24.0
width = int(capture.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT))
if width < 100 or height < 100:
    capture.release()
    raise RuntimeError(f"Unexpected video dimensions: {width}x{height}")

# The logo is fixed near the lower-right in the 1280x720 source.
scale_x, scale_y = width / 1280.0, height / 720.0
center = (round(1160 * scale_x), round(595 * scale_y))
axes = (round(31 * scale_x), round(31 * scale_y))
mask = np.zeros((height, width), dtype=np.uint8)
cv2.ellipse(mask, center, axes, 0, 0, 360, 255, -1)
mask = cv2.dilate(mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3)), iterations=1)

with tempfile.TemporaryDirectory() as tmpdir:
    tmp = Path(tmpdir)
    intermediate = tmp / "inpainted.mp4"
    cleaned = tmp / "hero-video-clean.mp4"
    writer = cv2.VideoWriter(str(intermediate), cv2.VideoWriter_fourcc(*"mp4v"), fps, (width, height))
    if not writer.isOpened():
        capture.release()
        raise RuntimeError("Could not initialize the intermediate video writer")

    frames = 0
    while True:
        ok, frame = capture.read()
        if not ok:
            break
        writer.write(cv2.inpaint(frame, mask, 9, cv2.INPAINT_TELEA))
        frames += 1

    capture.release()
    writer.release()
    if frames == 0:
        raise RuntimeError("No frames were processed")

    subprocess.run([
        "ffmpeg", "-y", "-v", "error", "-i", str(intermediate),
        "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "19",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(cleaned)
    ], check=True)
    os.replace(cleaned, video_path)

print(f"Cleaned watermark in {frames} frames ({width}x{height} at {fps:.3f} fps).")
