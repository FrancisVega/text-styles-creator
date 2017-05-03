const fs = require('fs');

// Sketch constants
const alignment = {
  left: 0,
  right: 1,
  center: 2,
};

// Functions
const createStyle =
  (name, font, size, spacing, lineHeight, color, alignment, textTransform = 0 ) =>
  ({ name, font, size, color, alignment, spacing, lineHeight, textTransform });

const hexToRGB =
  (hex, alpha = 1) =>
  ({
    red: 1/(255/parseInt(hex.slice(1, 3), 16)),
    green: 1/(255/parseInt(hex.slice(3, 5), 16)),
    blue: 1/(255/parseInt(hex.slice(5, 7), 16)),
    alpha: alpha
  });

const config = JSON.parse(fs.readFileSync('fonts.json', 'utf8'));

// map the color
const parse = config.map(x => {
  const hexColor = x.color;
  const rgbaColor = hexToRGB(hexColor);
  x.color = rgbaColor
  x.alignment = alignment[x.alignment]
  return x
});

const styles = { 'styles': parse }
const out = JSON.stringify(styles, null, 2);

fs.writeFileSync('/Users/hisco/Desktop/_styles.json', out);
