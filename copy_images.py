import shutil
import os

files = {
    "dog_adventurer_dice_1770370603097.png": "dog-adventurer-dice.png",
    "rainbow_trout_candle_1770370783352.png": "rainbow-trout-candle.png",
    "hunt_unicorn_candle_1770370828522.png": "hunt-unicorn-candle.png",
    "church_dying_sun_candle_1770370886858.png": "church-dying-sun-candle.png",
    "celestial_paladin_dice_1770370924470.png": "celestial-paladin-dice.png",
    "void_walker_dice_1770370963243.png": "void-walker-dice.png",
    "ruby_fireball_dice_1770370998031.png": "ruby-fireball-dice.png",
    "sapphire_ocean_dice_1770371064325.png": "sapphire-ocean-dice.png"
}

src_base = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4"
dst_base = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/public/products"

if not os.path.exists(dst_base):
    print(f"Destination directory {dst_base} does not exist.")
    exit(1)

for src_name, dst_name in files.items():
    src = os.path.join(src_base, src_name)
    dst = os.path.join(dst_base, dst_name)
    try:
        shutil.copy(src, dst)
        print(f"Copied {src_name} to {dst_name}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
