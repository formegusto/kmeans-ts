import { Command } from "commander";
import { setPrototype } from "../prototype";
import { exportOutput, importOutput } from "../utils";
import { KMeans } from "../models/kmeans.model";

setPrototype();
(() => {
  try {
    const com = new Command();
    com
      .name("Typescript로 구현해보는 KMeans 실행 프로그램")
      .requiredOption(
        "-f, --filename <데이터 집합 파일명>",
        "데이터 집합 파일명이 입력되지 않았습니다."
      )
      .requiredOption(
        "-t, --type <result | steps, 출력물 형식 지정>",
        "출력물 형식이 지정되지 않았습니다."
      )
      .requiredOption("-k, --K <군집 개수>", "군집 개수가 입력되지 않았습니다.")
      .parse();
    const { filename, type, ...params } = com.opts<KMeansRunParams>();
    const K = parseInt(params.K);
    const dataset = importOutput(filename);
    const result =
      type === "result"
        ? new KMeans(K).fit({
            dataset,
          })
        : new KMeans(K).steps({ dataset });
    exportOutput(`run-kmeans-${type}-target-${filename}-${Date.now()}.json`, {
      dataset,
      result,
    });
  } catch (err) {
    console.error(err);
  }
})();
