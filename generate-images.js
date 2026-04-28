const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuració de carpetes
const baseAssets = 'src/assets';
const folders = [
  'receptes/trinxat_de_la_cerdanya',
  'receptes/samfaina',
  'receptes/esqueixada',
  'receptes/fideua',
  'receptes/escudella',
  'postres/crema_catalana',
  'postres/mel-mato',
  'postres/coca_llardons'
];

async function processAllImages() {
  for (const folder of folders) {
    const dirPath = path.join(baseAssets, folder);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      // Només imatges originals
      if (!/\.(jpg|jpeg|png)$/i.test(file) || file.includes('-small')) continue;

      const inputPath = path.join(dirPath, file);
      
      try {
        // Imatge gran WebP
        const largeWebp = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        await sharp(inputPath).webp({ quality: 80 }).toFile(largeWebp);

        // Small JPG (400px per a detalls, 500px per a categories)
        const isMain = file.toLowerCase().includes('receta') || file.toLowerCase().includes('samfaina') || file.toLowerCase().includes('esqueixada') || file.toLowerCase().includes('fideua') || file.toLowerCase().includes('escudella') || file.toLowerCase().includes('crema-catalana') || file.toLowerCase().includes('mel-mato') || file.toLowerCase().includes('coca-llardons');
        
        const size = isMain ? 500 : 400;
        const outputPath = path.join(dirPath, file.replace(/\.(jpg|jpeg|png)$/i, '-small' + path.extname(file)));
        
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover', position: 'center' })
          .jpeg({ quality: 80 })
          .toFile(outputPath);

        // Small WebP
        const smallWebp = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover', position: 'center' })
          .webp({ quality: 75 })
          .toFile(smallWebp);

        console.log(`Processada: ${file} a ${folder}`);
      } catch (err) {
        console.error(`Error a ${file}:`, err.message);
      }
    }
  }
}

processAllImages();
