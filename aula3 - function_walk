const fs = require('fs').promises;
const path = require('path');

// Função que define um diretório padrão (rootDir)
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
};

// Função que caminha pelos arquivos do diretório
async function walk(files, rootDir) {
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        // Checa se é um diretorio e exibe os arquivos dentro dele
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        console.log(fileFullPath);
    }
}

// Diretório a ser lido 
readdir('E:/xampp/htdocs/pro/JavaScript - Node');
