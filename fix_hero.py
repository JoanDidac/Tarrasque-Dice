import shutil
import os

src = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4/uploaded_media_1_1770376771775.jpg"
dst = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/hero-bg.jpg"

try:
    if not os.path.exists(src):
        print(f"Source not found: {src}")
        exit(1)
        
    shutil.copy2(src, dst)
    print(f"Successfully copied hero image to {dst}")
    if os.path.exists(dst):
        print(f"File size: {os.path.getsize(dst)}")
except Exception as e:
    print(f"Error: {e}")
