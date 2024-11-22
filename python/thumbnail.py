import os
from PIL import Image

targetDir = "../public/portfolio"
files = os.listdir(targetDir)

for file in files:
    if file == '.DS_Store':
        continue
    if file.endswith('.thumb.jpg'):
        continue
    filePath = f'{targetDir}/{file}'
    image = Image.open(filePath)
    maxSize = (800, 800)
    image.thumbnail(maxSize)

    image.save(f'{filePath}.thumb.jpg')
    