const fs = require('fs');

// Colors
const colors = {
  coal: { red: 0.1372, green: 0.1372, blue: 0.1372, alpha: 1 },
  pyrite: { red: 0.745, green: 0.643, blue: 0.509, alpha: 1 },
};

// Fonts
const fonts = {
  sofia: {
    bold: 'SofiaPro-Bold',
    regular: 'SofiaPro-Regular'
  },
  playfair: {
    bold: '',
  },
};

// Sketch constants
const alignment = {
  left: 0,
  right: 1,
  center: 2,
};

// Function
const createStyle =
  (name, font, size, spacing, lineHeight, color, alignment, textTransform = 0 ) =>
  ({ name, font, size, color, alignment, spacing, lineHeight, textTransform });


// Style creation
const styles = {
'styles': [
  createStyle('@XL/Headings/left/Heading-XL $ pyrite', fonts.sofia.bold, 64, -1.5, 64, colors.pyrite, alignment.left),
  createStyle('@XL/Headings/left/Heading-L $ pyrite',  fonts.sofia.bold, 32, -1.5, 32, colors.pyrite, alignment.left),
  createStyle('@XL/Headings/left/Heading-M $ pyrite',  fonts.sofia.bold, 24, -1.0, 24, colors.pyrite, alignment.left),
  createStyle('@XL/Headings/right/Heading-XL $ pyrite', fonts.sofia.bold, 64, -1.5, 64, colors.pyrite, alignment.right),
  createStyle('@XL/Headings/right/Heading-L $ pyrite',  fonts.sofia.bold, 32, -1.5, 32, colors.pyrite, alignment.right),
  createStyle('@XL/Headings/right/Heading-M $ pyrite',  fonts.sofia.bold, 24, -1.0, 24, colors.pyrite, alignment.right),
]};


const out = JSON.stringify(styles, null, 2);
fs.writeFileSync('/Users/hisco/Desktop/_styles.json', out);
