
const fs = require('fs');
const path = require('path');

// This script assumes you've already run `npm run build` to generate the dist directory

// Function to recursively get all HTML, CSS and JS files
function getFilesInDirectory(directory) {
  const files = [];
  
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const filePath = path.join(directory, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      files.push(...getFilesInDirectory(filePath));
    } else {
      if (/\.(html|css|js)$/.test(file)) {
        files.push(filePath);
      }
    }
  }
  
  return files;
}

// Function to update file paths in HTML, CSS and JS files
function updateFilePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update paths to be relative
  content = content.replace(/src="\//g, 'src="./');
  content = content.replace(/href="\//g, 'href="./');
  content = content.replace(/url\('\//g, "url('./");
  content = content.replace(/url\("\//g, 'url("./');
  
  fs.writeFileSync(filePath, content);
}

// Process all files
console.log('Updating file paths for Google Sites compatibility...');
const distPath = path.join(__dirname, 'dist');
const files = getFilesInDirectory(distPath);

for (const file of files) {
  updateFilePaths(file);
}

console.log('Done! Your build is now ready for Google Sites.');
console.log('');
console.log('To deploy to Google Sites:');
console.log('1. Upload all files from the "dist" directory to a web hosting service like GitHub Pages or similar');
console.log('2. In Google Sites, insert an <iframe> element by using the "Embed" option');
console.log('3. Set the iframe source to your uploaded index.html location');
console.log('4. Set appropriate width and height values (try 100% width)');
console.log('');
console.log('IMPORTANT: Google Sites has limitations. For a full-featured web application,');
console.log('consider deploying to GitHub Pages, Netlify, Vercel, or another dedicated hosting service.');
