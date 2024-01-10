// import { KMeans } from "./models";
import { setPrototype } from "./prototype";
import { Command } from "commander";
import { KMeans } from "./models/kmeans.model";
import { exportOutput, generateRandomDataset } from "./utils";

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
    // const dataset = importOutput(filename);
    // const K = 3;
    // const kmeans = new KMeans(K);
    // console.log(JSON.stringify(kmeans.fit(dataset)));
    // for (let i = 0; i < 4; i++) {
    //   const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    //   const K = 3;
    //   const kmeans = new KMeans(K);
    //   const centers = kmeans.initCenters({ dataset });
    //   exportOutput(`process_1-2_test_${i}.json`, { dataset, centers });
    // }

    const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    const K = 3;
    const kmeans = new KMeans(K);
    const steps = [];
    let centers = kmeans.initCenters({ dataset });
    while (true) {
      const distances = kmeans.calcDistances({ dataset, centers });
      const labels = kmeans.setLabels({ distances });
      steps.push({
        dataset,
        centers,
        labels,
      });
      const nextCenters = kmeans.moveCenters({ dataset, centers, labels });
      if (!nextCenters) break;
      centers = nextCenters;
    }
    console.log(steps.length);
    exportOutput(`process_3-4_test.json`, steps);
  } catch (err) {
    console.error(err);
  }
})();
