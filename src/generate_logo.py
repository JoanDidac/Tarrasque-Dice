
import base64
import os

src_path = '/Users/jd/.gemini/antigravity/brain/f90460ba-e413-450f-99e6-77dbc7b1bcb2/terrasque_eye_light_gray_1770495519871.png'
dst_path = '/Users/jd/.gemini/antigravity/scratch/Terrasque-Dice/src/components/logo-data.ts'

try:
    with open(src_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
    
    content = f"export const logoData = 'data:image/png;base64,{encoded_string}';"
    
    with open(dst_path, "w") as text_file:
        text_file.write(content)
        
    print(f"SUCCESS: Wrote to {dst_path}")
except Exception as e:
    print(f"ERROR: {e}")
