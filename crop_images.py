from PIL import Image, ImageChops
import os

img_path = r'C:\Users\QCU\.gemini\antigravity\brain\a4fca5d1-c10e-441a-8caf-9e9d2cfa1d32\media__1776214365318.png'
out_dir = r'C:\projects\wssci\assets\products\hearing\temp'
os.makedirs(out_dir, exist_ok=True)

img = Image.open(img_path).convert('RGB')
W, H = img.size # 940, 788

# Assuming header ends at y=300
header_end_y = 230
grid_w = W // 4
grid_h = int((H - header_end_y) / 2)

names = [
    'interlagos_light.png', 'magny_helmet_2.png', 'interlagos_foldable.png', 'suzuka_2.png',
    'conicfir050.png', 'spa_3.png', 'conicfit100.png', 'conic_display.png'
]

idx = 0
for row in range(2):
    for col in range(4):
        x1 = col * grid_w
        y1 = header_end_y + row * grid_h
        x2 = x1 + grid_w
        y2 = y1 + grid_h
        
        box = (x1, y1, x2, y2)
        crop_img = img.crop(box)
        
        # trim whitespace
        bg = Image.new('RGB', crop_img.size, (255, 255, 255))
        diff = ImageChops.difference(crop_img, bg)
        bbox = diff.convert('L').point(lambda x: 0 if x < 15 else 255).getbbox()
        
        if bbox:
            final_img = crop_img.crop(bbox)
        else:
            final_img = crop_img
            
        final_img.save(os.path.join(out_dir, names[idx]))
        idx += 1
        
print('Done!')
