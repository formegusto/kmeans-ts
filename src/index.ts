// import { KMeans } from "./models";
import { KMeans } from "./models/kmeans.model";
import { setPrototype } from "./prototype";
import { Command } from "commander";
import { exportOutput, generateRandomDataset, importOutput } from "./utils";
// import { KMeans } from "./models/kmeans.model";
// import { exportOutput, generateRandomDataset } from "./utils";

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
    // while (true) {
    //   const K = 7;
    //   const kmeans = new KMeans(K, dataset);
    //   console.log(...kmeans);
    // }
    // console.log(JSON.stringify(kmeans.fit(dataset)));
    // for (let i = 0; i < 4; i++) {
    //   const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    //   const K = 3;
    //   const kmeans = new KMeans(K);
    //   const centers = kmeans.initCenters({ dataset });
    //   exportOutput(`process_1-2_test_${i}.json`, { dataset, centers });
    // }

    // const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    // const K = 3;
    // const kmeans = new KMeans(K);
    // const steps = [];
    // // 1. K개의 초기 중심점 설정
    // let centers = kmeans.initCenters({ dataset });
    // while (true) {
    //   // 2. 중심점과 데이터 간의 거리 계산
    //   const distances = kmeans.calcDistances({ dataset, centers });
    //   // 3. 최소 거리 중심점의 군집 번호를 데이터에 부여
    //   const labels = kmeans.setLabels({ distances });
    //   // *. 평가
    //   const inertia = kmeans.calcInertia({ dataset, centers, labels });
    //   console.log(inertia);
    //   steps.push({
    //     dataset,
    //     centers,
    //     labels,
    //     inertia,
    //   });
    //   // 4. 군집 별 평균값을 계산하여 중심점에 반영
    //   const nextCenters = kmeans.moveCenters({ dataset, centers, labels });
    //   // 5. 2~4의 과정을 중심점에 변화가 없을 때까지 반복
    //   if (!nextCenters) break;
    //   centers = nextCenters;
    // }
    // console.log(steps.length);
    // exportOutput(`process_3-4_test.json`, steps);

    // const results = [];
    // for (let i = 0; i < 8; i++) {
    //   const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    //   const K = 3 + Math.floor(Math.random() * 3);
    //   const kmeans = new KMeans(K);
    //   const result = kmeans.fit({ dataset });
    //   results.push({
    //     dataset,
    //     result,
    //   });
    // }
    // exportOutput(`process_fit_test.json`, results);

    // const K = 3;
    // const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    // const iterator = new KMeansIterator(K, dataset);
    // const steps = [...iterator];
    // exportOutput(`process_iterator_test.json`, { dataset, steps });

    // let i = 0;
    // while (true) {
    //   i++;
    //   const K = 3 + Math.floor(Math.random() * 3);
    //   new KMeans(K).fit({
    //     dataset: generateRandomDataset({ shape: [100, 2] }) as number[][],
    //   });
    //   console.log(i);
    // }
    const dataset = generateRandomDataset({ shape: [100, 2] }) as number[][];
    const results = new KMeans(3).steps({
      dataset,
    });
    exportOutput(`process_steps_test.json`, { dataset, results });
    console.log(results.length);
  } catch (err) {
    console.error(err);
  }
})();
