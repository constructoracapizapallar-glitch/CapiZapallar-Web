const fs = require('fs');
const path = require('path');

const logoDir = 'c:/proyectosvscode/CapiZapallar/images';
if (!fs.existsSync(logoDir)) {
    fs.mkdirSync(logoDir, { recursive: true });
}

const svgContent = `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="500" height="500" fill="#0A0A0A"/>
<path d="M150 400L250 100L350 400" stroke="#F59E0B" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M180 330H320" stroke="#F59E0B" stroke-width="10" stroke-linecap="round"/>
<circle cx="250" cy="250" r="180" stroke="#F59E0B" stroke-width="2" stroke-dasharray="10 10"/>
</svg>`;

try {
    fs.writeFileSync(path.join(logoDir, 'logo.svg'), svgContent);
    console.log('--- EXITO: Logo guardado en /images/logo.svg ---');
} catch (err) {
    console.error('Error al guardar:', err);
}
