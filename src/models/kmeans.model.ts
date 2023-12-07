import Errors from "../errors";
import { euclideanDistance } from "../utils";

// export class KMeans implements IKMeans {
//   centroids?: number[][];
//   distances?: number[][];
//   labels?: number[];

//   constructor(public K: number) {}

//   getSSE(dataset: number[][]): number {
//     if (!this.centroids || !this.labels) return Number.MAX_SAFE_INTEGER;

//     let sse = 0;
//     for (let i = 0; i < this.labels!.length; i++) {
//       const label = this.labels[i];
//       const point = dataset[i];
//       const centroid = this.centroids![label];
//       sse += point.reduce((acc, cur, i) => acc + (cur - centroid[i]) ** 2, 0);
//     }

//     return sse;
//   }

//   setInitCentroids(dataset: number[][]) {
//     // 1.1 첫 번째 중심점 무작위 선정
//     const centroids = [];
//     const ranIdx = Math.floor(Math.random() * dataset.length);
//     const firstCentroid = dataset[ranIdx];
//     centroids.push(firstCentroid);

//     for (let k = 1; k < this.K; k++) {
//       const distances = [];
//       for (let data of dataset) {
//         let minDistance = Number.MAX_SAFE_INTEGER;
//         // 1.2 선정된 중심점과 데이터 간의 거리 계산
//         for (let centroid of centroids) {
//           const distance = euclideanDistance(data, centroid);
//           minDistance = Math.min(distance, minDistance);
//         }
//         distances.push(minDistance);
//       }
//       // 1.3 최소 중심점 거리 중에서 최대 거리를 갖는 점을 다음 중심으로 선정
//       const maxIdx = distances.getMaxIdx();
//       const nextCentroid = dataset[maxIdx];
//       centroids.push(nextCentroid);
//       // 1.4 설정된 K개 만큼의 중심점이 샘플링될 때 까지 1.2단계와 1.3단계 반복
//     }
//     this.centroids = centroids;
//   }

//   calcDistances(dataset: number[][]) {
//     if (!this.centroids) throw Errors["NotSettingInitCentroids"];
//     const distances = [];
//     for (let data of dataset) {
//       const _distances = [];
//       for (let centroid of this.centroids) {
//         const distance = euclideanDistance(data, centroid);
//         _distances.push(distance);
//       }
//       distances.push(_distances);
//     }
//     this.distances = distances;
//   }

//   calcCentroids(dataset: number[][]) {
//     this.labels = this.distances!.map((d) => d.getMinIdx());

//     const labelCount: number[] = this.centroids!.map(() => 0);
//     const labelTotal: number[][] = this.centroids!.map((c) =>
//       Array.from({ length: c.length }, () => 0)
//     );
//     for (let i = 0; i < this.labels.length; i++) {
//       const label = this.labels[i];
//       const point = dataset[i];
//       labelCount[label]++;
//       labelTotal[label] = labelTotal[label].map((v, i) => v + point[i]);
//     }
//     console.log(`sum of squared error: ${this.getSSE(dataset)}`);

//     const newCentroids = labelCount.map((lc, i) =>
//       labelTotal[i].map((lt) => lt / lc)
//     );
//     this.centroids = newCentroids;
//   }

//   fit(dataset: number[][]) {
//     this.setInitCentroids(dataset);

//     while (true) {
//       const prevCentroids = [...this.centroids!];
//       this.calcDistances(dataset);
//       this.calcCentroids(dataset);

//       const nextCentroids = [...this.centroids!];

//       let isNext = false;
//       for (let i = 0; i < prevCentroids.length; i++) {
//         for (let j = 0; j < prevCentroids.length; j++)
//           if (prevCentroids[i][j] !== nextCentroids[i][j]) {
//             isNext = true;
//             break;
//           }
//         if (isNext) break;
//       }
//       if (!isNext) break;
//     }
//   }
// }

export class KMeans implements IKMeansIterable {
  constructor(public K: number, public dataset: number[][]) {}

  [Symbol.iterator](): Iterator<IKMeansIteratorResultValue> {
    return new KMeansIterator(this.K, this.dataset);
  }
}

export class KMeansIterator implements IKMeansIterator {
  centroids!: number[][];
  distances?: number[][];
  labels?: number[];

  constructor(public K: number, public dataset: number[][]) {
    this.setInitCentroids();
  }

  setInitCentroids() {
    // 1.1 첫 번째 중심점 무작위 선정
    const centroids = [];
    const ranIdx = Math.floor(Math.random() * this.dataset.length);
    const firstCentroid = this.dataset[ranIdx];
    centroids.push(firstCentroid);

    for (let k = 1; k < this.K; k++) {
      const distances = [];
      for (let data of this.dataset) {
        let minDistance = Number.MAX_SAFE_INTEGER;
        // 1.2 선정된 중심점과 데이터 간의 거리 계산
        for (let centroid of centroids) {
          const distance = euclideanDistance(data, centroid);
          minDistance = Math.min(distance, minDistance);
        }
        distances.push(minDistance);
      }
      // 1.3 최소 중심점 거리 중에서 최대 거리를 갖는 점을 다음 중심으로 선정
      const maxIdx = distances.getMaxIdx();
      const nextCentroid = this.dataset[maxIdx];
      centroids.push(nextCentroid);
      // 1.4 설정된 K개 만큼의 중심점이 샘플링될 때 까지 1.2단계와 1.3단계 반복
    }
    this.centroids = centroids;
  }

  calcDistances() {
    if (!this.centroids) throw Errors["NotSettingInitCentroids"];
    const distances = [];
    for (let data of this.dataset) {
      const _distances = [];
      for (let centroid of this.centroids) {
        const distance = euclideanDistance(data, centroid);
        _distances.push(distance);
      }
      distances.push(_distances);
    }
    this.distances = distances;
  }

  labeling() {
    this.labels = this.distances!.map((d) => d.getMinIdx());
  }

  getSSE() {
    if (!this.centroids || !this.labels) return Number.MAX_SAFE_INTEGER;

    let sse = 0;
    for (let i = 0; i < this.labels!.length; i++) {
      const label = this.labels[i];
      const point = this.dataset[i];
      const centroid = this.centroids![label];
      sse += point.reduce((acc, cur, i) => acc + (cur - centroid[i]) ** 2, 0);
    }

    return sse;
  }

  moveCentroids() {
    const labelCount: number[] = this.centroids!.map(() => 0);
    const labelTotal: number[][] = this.centroids!.map((c) =>
      Array.from({ length: c.length }, () => 0)
    );
    for (let i = 0; i < this.labels!.length; i++) {
      const label = this.labels![i];
      const point = this.dataset[i];
      labelCount[label]++;
      labelTotal[label] = labelTotal[label].map((v, i) => v + point[i]);
    }

    const newCentroids = labelCount.map((lc, i) =>
      labelTotal[i].map((lt) => lt / lc)
    );

    let isNext = false;
    const prevCentroids = this.centroids.flat();
    const nextCentroids = newCentroids.flat();
    for (let i = 0; i < prevCentroids.length; i++) {
      if (prevCentroids[i] !== nextCentroids[i]) {
        isNext = true;
        break;
      }
    }

    this.centroids = newCentroids;
    return isNext;
  }

  next(): IteratorResult<IKMeansIteratorResultValue> {
    this.calcDistances();
    this.labeling();
    const sse = this.getSSE();
    const isNext = this.moveCentroids();

    return { value: sse ? sse : undefined, done: !isNext };
  }
}
