const sharp = require('sharp');

const images = [
  {
    input: 'src/assets/postres/crema_catalana/crema-catalana.jpg',
    output: 'src/assets/postres/crema_catalana/crema-catalana-small.jpg',
    position: 'attention'
  },
  {
    input: 'src/assets/postres/mel-mato/mel-mato.jpg',
    output: 'src/assets/postres/mel-mato/mel-mato-small.jpg',
    position: 'attention'
  },
  {
    input: 'src/assets/postres/coca_llardons/coca-llardons.jpg',
    output: 'src/assets/postres/coca_llardons/coca-llardons-small.jpg',
    position: 'attention'
  }
];

images.forEach(img => {
  sharp(img.input)
    .resize({
      width: 500,
      height: 500,
      fit: 'cover',
      position: img.position
    })
    .toFile(img.output)
    .then(() => console.log(`Generada quadrada intel·ligent: ${img.output}`))
    .catch(err => console.error(`Error a ${img.input}:`, err));
});
