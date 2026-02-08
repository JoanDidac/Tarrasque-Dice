import shutil
import os

base_src = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4"
base_dst = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/products"

# Mapping for the new replacement dice
mapping = {
    "uploaded_media_1_1770378153847.png": "stormy-seas-dice.png",
    "uploaded_media_2_1770378153847.png": "terraform-dice.png",
    "uploaded_media_3_1770378153847.png": "sirens-tears-dice.png"
}

if not os.path.exists(base_dst):
    os.makedirs(base_dst)
    print(f"Created directory {base_dst}")

print("Starting migration of new dice images...")
for src_name, dst_name in mapping.items():
    src = os.path.join(base_src, src_name)
    dst = os.path.join(base_dst, dst_name)
    try:
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"✓ Copied {dst_name}")
        else:
            print(f"✕ Source not found: {src_name}")
    except Exception as e:
        print(f"✕ Error copying {src_name}: {e}")

print("Migration complete. Your site should now load correctly.")
