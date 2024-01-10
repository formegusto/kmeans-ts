import fs from "fs";
import path from "path";

const OUTPUT_PATH = path.join(__dirname, "../..", "output");

export function exportOutput(filename: string, data: any) {
  const filepath = path.join(OUTPUT_PATH, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, "\t"), {
    encoding: "utf-8",
  });
  console.log(`export file ${filepath} success :)`);
  return filepath;
}

export function importOutput(filename: string) {
  const filepath = path.join(OUTPUT_PATH, filename);
  const data = JSON.parse(fs.readFileSync(filepath, { encoding: "utf-8" }));
  console.log(`import file ${filepath} success :)`);
  return data;
}
