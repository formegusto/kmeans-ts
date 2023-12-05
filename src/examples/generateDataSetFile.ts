import fs from "fs";
import path from "path";
import { generateRandomDataSet } from "../utils";

(() => {
  const dataset = generateRandomDataSet({
    shape: [100, 2],
  });
  const filepath = path.join(__dirname, "../..", "datas");
  const filename = `dataset-${Date.now()}.json`;
  fs.writeFileSync(
    `${filepath}/${filename}`,
    JSON.stringify(dataset, null, "\t")
  );

  console.log(`generate ${filename}`);
  // generate dataset-1701756794497.json
})();
