import * as fs from "node:fs";
import * as path from "node:path";

const line = "I bought the dip, then the dip dipped, then my group chat started calling me 'the dip', so at this point I'm just a liquidity event with Wi-Fi.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line, "utf8");
fs.chmodSync(entryPath, 0o644);
