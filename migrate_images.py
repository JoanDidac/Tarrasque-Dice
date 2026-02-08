import shutil
import os

# Define the source and destination directories
src_base = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4"
dst_base = "/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/assets/products"

# Define the file mapping
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

# Ensure destination directory exists
os.makedirs(dst_base, exist_ok=True)

report = []
success_count = 0

try:
    report.append(f"Starting copy to {dst_base}")
    for src_name, dst_name in files.items():
        src = os.path.join(src_base, src_name)
        dst = os.path.join(dst_base, dst_name)
        
        if not os.path.exists(src):
            report.append(f"MISSING SOURCE: {src}")
            continue
            
        try:
            shutil.copy2(src, dst)
            if os.path.exists(dst) and os.path.getsize(dst) > 0:
                report.append(f"SUCCESS: {dst_name} ({os.path.getsize(dst)} bytes)")
                success_count += 1
            else:
                report.append(f"FAILED (Empty/Missing dest): {dst_name}")
        except Exception as e:
            report.append(f"ERROR copying {src_name}: {str(e)}")

    report.append(f"Finished. Copied {success_count}/{len(files)} files.")
    
    # List directory content to be sure
    report.append(f"Directory listing of {dst_base}:")
    report.append(str(os.listdir(dst_base)))

except Exception as e:
    report.append(f"CRITICAL SCRIPT ERROR: {str(e)}")

# Write report to file so we can view it reliably
with open("migration_report.txt", "w") as f:
    f.write("\n".join(report))

print("Script execution complete. Check migration_report.txt")
