// Imports
const fs = require('fs');

// Sketch constants
const alignment = {
  left: 0,
  right: 1,
  center: 2,
};

// Functions
const hexToRGB = (hex, alpha = 1) => ({
  red: 1/(255/parseInt(hex.slice(1, 3), 16)),
  green: 1/(255/parseInt(hex.slice(3, 5), 16)),
  blue: 1/(255/parseInt(hex.slice(5, 7), 16)),
  alpha: alpha
});

const argvs = process.argv;
if (argvs.length === 4) {

const source = argvs[2];
const dst = argvs[3];

// Read config file
const config = JSON.parse(fs.readFileSync(source, 'utf8'));

// Parse color and alignment
const parse = config.map(style => {
  style.color = hexToRGB(style.color);
  style.alignment = alignment[style.alignment];
  return style;
});

// JSONIFY
const styleExportFile = JSON.stringify({ 'styles': parse }, null, 2);

// Writeout!
fs.writeFileSync(dst, styleExportFile);
} else {
  console.log(`
    Error. Better call Saul!

    Uso:
    $ node styles source.json dest.json
  `);

}
