const fs = require('fs');
const path = require('path');

const renameFile = (oldPath, newPath) => {
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${oldPath} -> ${newPath}`);
    } else {
        console.log(`File not found: ${oldPath}`);
    }
};

renameFile(
    path.join('src', 'pages', 'vidracaria-em-[slug].astro'),
    path.join('src', 'pages', '[bairroPageSlug].astro')
);

renameFile(
    path.join('src', 'pages', 'servicos', '[serviceSlug]-em-[bairroSlug].astro'),
    path.join('src', 'pages', 'servicos', '[serviceBairroSlug].astro')
);
