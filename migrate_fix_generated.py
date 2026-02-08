import shutil
import os

base_src = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4"
base_dst = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/products"

# Exact filenames of the newly generated images
generated_files = {
    "stormy_seas_dice_generated_1770378918242.png": "stormy-seas-dice.png",
    "terraform_dice_generated_1770378935714.png": "terraform-dice.png",
    "sirens_tears_dice_generated_1770378952404.png": "sirens-tears-dice.png"
}

if not os.path.exists(base_dst):
    os.makedirs(base_dst)

print("Overwriting previous images with generated originals...")

for src_name, dst_name in generated_files.items():
    src = os.path.join(base_src, src_name)
    dst = os.path.join(base_dst, dst_name)
    try:
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"✓ Updated {dst_name} with generated version")
        else:
            print(f"✕ Source generated file not found: {src_name}")
    except Exception as e:
        print(f"✕ Error copying {src_name}: {e}")

print("Fix complete. Replaced screenshots with original generated art.")
