"""
Process Instagram screenshots into polished product images.
- Center-crops to square
- Enhances contrast, sharpness, and color
- Applies subtle vignette for depth
- Resizes to 800x800
- Exports as optimized PNG
"""

from PIL import Image, ImageEnhance, ImageFilter, ImageDraw
import os
import sys

INPUT_DIR = "raw-images/Tarrasque-Dice Insta screenshots"
OUTPUT_DIR = "processed-images"
TARGET_SIZE = 800

def center_crop_square(img):
    """Crop the largest centered square from the image."""
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))

def enhance_image(img):
    """Apply professional-looking enhancements."""
    # Convert to RGB if RGBA
    if img.mode == 'RGBA':
        bg = Image.new('RGB', img.size, (0, 0, 0))
        bg.paste(img, mask=img.split()[3])
        img = bg
    
    # Boost contrast slightly
    img = ImageEnhance.Contrast(img).enhance(1.15)
    
    # Boost color saturation
    img = ImageEnhance.Color(img).enhance(1.2)
    
    # Sharpen
    img = ImageEnhance.Sharpness(img).enhance(1.4)
    
    # Slight brightness boost
    img = ImageEnhance.Brightness(img).enhance(1.05)
    
    return img

def add_vignette(img, intensity=0.3):
    """Add a subtle vignette effect for depth."""
    w, h = img.size
    # Create a radial gradient mask
    mask = Image.new('L', (w, h), 255)
    draw = ImageDraw.Draw(mask)
    
    # Draw concentric ellipses from dark edges to bright center
    for i in range(min(w, h) // 2):
        # Calculate opacity: darker at edges, lighter toward center
        ratio = i / (min(w, h) / 2)
        opacity = int(255 * (ratio ** 0.5))  # Square root for gradual falloff
        
        draw.ellipse(
            [w//2 - i, h//2 - i, w//2 + i, h//2 + i],
            fill=opacity
        )
    
    # Apply a blur to smooth the vignette
    mask = mask.filter(ImageFilter.GaussianBlur(radius=w//8))
    
    # Darken the edges
    dark = Image.new('RGB', (w, h), (0, 0, 0))
    img = Image.composite(img, dark, mask)
    
    return img

def process_single(input_path, output_path):
    """Process a single image file."""
    try:
        img = Image.open(input_path)
        
        # Step 1: Center crop to square
        img = center_crop_square(img)
        
        # Step 2: Resize to target
        img = img.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)
        
        # Step 3: Enhance
        img = enhance_image(img)
        
        # Step 4: Subtle vignette
        img = add_vignette(img, intensity=0.2)
        
        # Step 5: Export
        img.save(output_path, 'PNG', optimize=True)
        
        size_kb = os.path.getsize(output_path) / 1024
        print(f"  ✓ {os.path.basename(output_path)} ({size_kb:.0f}KB)")
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    files = sorted([
        f for f in os.listdir(INPUT_DIR) 
        if f.lower().endswith('.png') and not f.startswith('.')
    ])
    
    print(f"Found {len(files)} images to process")
    print(f"Output directory: {OUTPUT_DIR}/")
    print("-" * 50)
    
    success = 0
    for i, fname in enumerate(files, 1):
        input_path = os.path.join(INPUT_DIR, fname)
        # Create clean output name: product-01.png, product-02.png, etc.
        output_name = f"product-{i:02d}.png"
        output_path = os.path.join(OUTPUT_DIR, output_name)
        
        print(f"[{i}/{len(files)}] {fname}")
        if process_single(input_path, output_path):
            success += 1
    
    print("-" * 50)
    print(f"Done! {success}/{len(files)} images processed successfully.")
    print(f"Output saved to: {OUTPUT_DIR}/")

if __name__ == "__main__":
    main()
