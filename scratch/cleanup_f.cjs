const fs = require('fs');
const path = require('path');

const dir = 'src/content/servicos';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove truncated "especialistas em f."
    content = content.replace(/especialistas em f\."/g, 'especialistas."');
    content = content.replace(/especialistas em f\./g, 'especialistas.');
    
    // Safety check for any other very short endings
    content = content.replace(/ em f\."/g, '."');
    
    fs.writeFileSync(filePath, content);
  }
});

console.log('✅ Letra "f" solta removida com sucesso!');
