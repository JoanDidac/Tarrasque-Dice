const fs = require('fs');
const src = "/Users/jd/.gemini/antigravity/brain/60d20c30-f187-4f5e-a168-1bbf6e3281a4/uploaded_media_1770374432500.png";
const dst = "src/assets/products/ruby-fireball-dice.png";

console.log(`Copying ${src} to ${dst}`);

try {
    if (!fs.existsSync(src)) {
        console.error("Source not found!");
        process.exit(1);
    }
    fs.copyFileSync(src, dst);
    console.log("Success!");
    console.log("Destination size: " + fs.statSync(dst).size);
} catch (e) {
    console.error("Error: " + e.message);
}
