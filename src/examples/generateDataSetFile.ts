import { exportOutput, generateRandomDataset } from "../utils";

(() => {
  const dataset = generateRandomDataset({
    shape: [100, 2],
  });
  const filename = `dataset-${Date.now()}.json`;
  exportOutput(filename, dataset);
  // generate dataset-1701756794497.json
})();
