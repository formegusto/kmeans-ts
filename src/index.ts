import { KMeans } from "./models";
import path from "path";
import fs from "fs";
import { setPrototype } from "./prototype";
import { Command } from "commander";

setPrototype();
(() => {
  try {
    const com = new Command();
    com
      .name("Typescript로 구현해보는 KMeans")
      .description("KMeans 실행 프로그램")
      .requiredOption(
        "-f, --filename <데이터셋 파일명>",
        "입력데이터가 입력되지 않았습니다."
      )
      .parse();
    const { filename } = com.opts<KMeansRunParams>();
    const filepath = path.join(__dirname, "..", "datas", filename);
    const dataset = JSON.parse(
      fs.readFileSync(filepath, { encoding: "utf-8" })
    );

    const K = 3;
    const kmeans = new KMeans(K);
    console.log(JSON.stringify(kmeans.fit(dataset)));
  } catch (err) {
    console.error(err);
  }
})();
