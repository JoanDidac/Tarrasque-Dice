import shutil
import os

src_base = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4"
dst_base = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/products"

files = {
    "dog_adventurer_dice_1770370603097.png": "dog-adventurer-dice.png",
    "rainbow_trout_candle_1770370783352.png": "rainbow-trout-candle.png",
    "hunt_unicorn_candle_1770370828522.png": "hunt-unicorn-candle.png",
    "church_dying_sun_candle_1770370886858.png": "church-dying-sun-candle.png",
    "celestial_paladin_dice_1770370924470.png": "celestial-paladin-dice.png",
    "void_walker_dice_1770370963243.png": "void-walker-dice.png",
    "uploaded_media_1770374432500.png": "ruby-fireball-dice.png",
    "sapphire_ocean_dice_1770371064325.png": "sapphire-ocean-dice.png"
}

if not os.path.exists(dst_base):
    os.makedirs(dst_base)

for src_name, dst_name in files.items():
    src = os.path.join(src_base, src_name)
    dst = os.path.join(dst_base, dst_name)
    try:
        shutil.copy2(src, dst)
        print(f"Copied {src_name} -> {dst_name}")
    except Exception as e:
        print(f"Failed {src_name}: {e}")
