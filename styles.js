// Imports
const fs = require('fs');

// Sketch constants
const alignment = {
  left: 0,
  right: 1,
  center: 2,
};

// Helper functions
const hexToRGB =
  (hex, alpha = 1) =>
  ({
    red: 1/(255/parseInt(hex.slice(1, 3), 16)),
    green: 1/(255/parseInt(hex.slice(3, 5), 16)),
    blue: 1/(255/parseInt(hex.slice(5, 7), 16)),
    alpha: alpha
  });

// Config file
const config = JSON.parse(fs.readFileSync('fonts.json', 'utf8'));

// map the color
const parse = config.map(style => {
  style.color = hexToRGB(style.color);
  style.alignment = alignment[style.alignment];
  return style;
});

const styleExportFile = JSON.stringify({ 'styles': parse }, null, 2);

fs.writeFileSync('/Users/hisco/Desktop/_styles.json', styleExportFile);
