from pathlib import Path
from PIL import Image

# Convert all PNG screenshots in assets/mockup_fotos_reales to WebP with good balance size/quality
root = Path(__file__).resolve().parents[1] / 'assets' / 'mockup_fotos_reales'
outputs = []
for png in root.glob('*.PNG'):
    img = Image.open(png).convert('RGB')
    webp_path = png.with_suffix('.webp')
    img.save(webp_path, 'WEBP', quality=82, method=6)
    outputs.append((png.name, webp_path.name))

print('Converted to WebP:')
for src, out in outputs:
    print(f'  {src} -> {out}')
