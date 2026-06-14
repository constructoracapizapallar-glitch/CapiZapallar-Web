const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const replacements = {
    'Ã¡': 'á', 'Ã©': 'é', 'Ã­': 'í', 'Ã³': 'ó', 'Ãº': 'ú',
    'Ã±': 'ñ', 'Ã‘': 'Ñ', 'Ã“': 'Ó', 'Ã‰': 'É', 'Ãš': 'Ú', 
    'Ã ': 'Á', 'Â°': '°', 'Â¿': '¿', 'Â¡': '¡', 'ï»¿': '', 
    'â€œ': '“', 'â€ ': '”', 'â€“': '–', 'â€”': '—',
    'ðŸŒ¡ï¸': '🌡️', 'ðŸ”¨': '🔨', 'ðŸ›¡ï¸': '🛡️', 'âš¡': '⚡',
    'ðŸ“ ': '📌', 'ðŸ”§': '🔧', 'ðŸ’¡': '💡', 'Â': '', 'Ã': 'Á',
    'ðŸŒ“': '🌓', 'ðŸšš': '🚚', 'ðŸ§±': '🧱', 'ðŸ—ï¸': '🏗️',
    'ðŸ ': '🏠', 'ðŸ”‘': '🔑', 'ðŸ”¥': '🔥', 'ðŸ”Š': '🔊'
};

files.forEach(file => {
    let text = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const [bad, good] of Object.entries(replacements)) {
        if (text.includes(bad)) {
            text = text.split(bad).join(good);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(file, text, 'utf8');
    }
});
