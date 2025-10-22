import fs from "node:fs";
import path from "node:path";

const outDir = "dist";
fs.mkdirSync(outDir, { recursive: true });

// artifact text file (kept)
const content = `Build OK at ${new Date().toISOString()}\n`;
fs.writeFileSync(path.join(outDir, "hello.txt"), content);

// minimal web page
const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Hello CI/CD</title>
  </head>
  <body>
    <h1> Hello from GitHub Pages!</h1>
    <p>This page was built by GitHub Actions and deployed to Pages.</p>
    <pre>${content}</pre>
  </body>
</html>`;
fs.writeFileSync(path.join(outDir, "index.html"), html);

console.log("Build complete  dist/index.html + dist/hello.txt");
