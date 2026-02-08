import shutil
import os
import sys

# Define paths
artifact_path = '/Users/jd/.gemini/antigravity/brain/ad5e6071-16c4-4326-be5b-19c6375bd6d7/hero_dice_void_walker_v2_1770366936904.png'
project_path = '/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/hero-bg.png'

print(f"Starting copy operation...")
print(f"Source: {artifact_path}")
print(f"Destination: {project_path}")

try:
    # 1. Verify Source
    if not os.path.exists(artifact_path):
        print("ERROR: Source file does not exist!")
        sys.exit(1)
    
    src_size = os.path.getsize(artifact_path)
    print(f"Source size: {src_size} bytes")

    # 2. Ensure Destination Directory
    os.makedirs(os.path.dirname(project_path), exist_ok=True)
    
    # 3. Copy File
    shutil.copy2(artifact_path, project_path)
    
    # 4. Verify Destination
    if os.path.exists(project_path):
        dst_size = os.path.getsize(project_path)
        print(f"SUCCESS: Copied to {project_path}")
        print(f"Destination size: {dst_size} bytes")
        
        if src_size == dst_size:
            print("Integrity Check: PASSED")
        else:
            print("Integrity Check: FAILED (Size mismatch)")
    else:
        print("FAILURE: File not found after copy attempt.")

except Exception as e:
    print(f"EXCEPTION: {e}")
    sys.exit(1)
