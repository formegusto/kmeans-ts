import { Command } from "commander";
import { exportOutput, generateRandomDataset } from "../utils";

(() => {
  const com = new Command();
  com
    .name("랜덤 데이터 집합 생성 프로그램")
    .description(
      "0부터 100사이의 값으로 이루어진 포인트 데이터 집합을 생성합니다."
    )
    .requiredOption(
      "-l, --length <포인트 데이터 개수>",
      "개수에 대한 매개변수가 입력되지 않았습니다."
    )
    .parse();
  const params = com.opts<GenerateRandomDatasetRunParams>();
  const length = parseInt(params.length);
  const dataset = generateRandomDataset({
    shape: [length, 2],
  });
  const filename = `dataset-${Date.now()}.json`;
  exportOutput(filename, dataset);
})();
