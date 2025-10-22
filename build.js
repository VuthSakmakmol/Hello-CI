import fs from "node:fs";
import path from "node:path";

const outDir = "dist";
fs.mkdirSync(outDir, { recursive: true });

const content = `Build OK at ${new Date().toISOString()}\n`;
fs.writeFileSync(path.join(outDir, "hello.txt"), content);

console.log("Build step complete. Artifact in dist/hello.txt");