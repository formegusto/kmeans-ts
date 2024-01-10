// import { KMeans } from "./models";
import { setPrototype } from "./prototype";
import { Command } from "commander";
import { KMeans } from "./models/kmeans.model";
import { importOutput } from "./utils";

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
    const dataset = importOutput(filename);

    // const K = 3;
    // const kmeans = new KMeans(K);
    // console.log(JSON.stringify(kmeans.fit(dataset)));
    const K = 3;
    const kmeans = new KMeans(K);
    const centers = kmeans.initCenters({ dataset });
    console.log(dataset, centers);
  } catch (err) {
    console.error(err);
  }
})();
