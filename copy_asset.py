import shutil
import os

src = '/Users/jd/.gemini/antigravity/brain/f90460ba-e413-450f-99e6-77dbc7b1bcb2/terrasque_eye_light_gray_1770495519871.png'
dst = '/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/terrasque-logo.png'

logfile = '/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/copy_log.txt'
with open(logfile, 'w') as f:
    f.write(f"Checking source: {src}\n")
    if os.path.exists(src):
        f.write("Source exists.\n")
        try:
            shutil.copy2(src, dst)
            f.write(f"Copied to {dst}\n")
        except Exception as e:
            f.write(f"Copy failed: {e}\n")
    else:
        f.write("Source DOES NOT exist.\n")
    
    f.write("Listing destination directory:\n")
    try:
        f.write(str(os.listdir(os.path.dirname(dst))) + "\n")
    except Exception as e:
        f.write(f"List dir failed: {e}\n")
