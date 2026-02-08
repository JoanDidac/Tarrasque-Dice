import shutil
import os

base_src = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4"
base_dst = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/products"

# Mapping based on plan
mapping = {
    "uploaded_media_1_1770378153847.png": "stormy-seas-dice.png",
    "uploaded_media_2_1770378153847.png": "terraform-dice.png",
    "uploaded_media_3_1770378153847.png": "sirens-tears-dice.png"
}

for src_name, dst_name in mapping.items():
    src = os.path.join(base_src, src_name)
    dst = os.path.join(base_dst, dst_name)
    try:
        shutil.copy2(src, dst)
        print(f"Copied {src_name} -> {dst_name}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
