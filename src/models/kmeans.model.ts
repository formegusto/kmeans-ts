import Errors from "../errors";
import { euclideanDistance } from "../utils";

interface IKMeansSetting {
  K: number;
}

interface IKMeansMethodParams {
  dataset?: number[][];
  centers?: number[][];
  distances?: number[][];
  labels?: number[];
}

interface IKMeansResult extends IKMeansMethodParams {
  inertia: number;
}

type KMeansMethod<R = number[][]> = (params: IKMeansMethodParams) => R;
interface IKMeans extends IKMeansSetting {
  initCenters: KMeansMethod;
  calcDistances: KMeansMethod;
  setLabels: KMeansMethod<number[]>;
  moveCenters: KMeansMethod<number[][] | null>;
  calcInertia: KMeansMethod<number>;
  fit: KMeansMethod<IKMeansResult>;
}

export class KMeans implements IKMeans {
  constructor(public K: number) {}

  initCenters({ dataset }: IKMeansMethodParams): number[][] {
    if (!dataset) throw Errors.EmptyRequiredParameters("dataset");

    // 1. 첫 번째 중심점을 무작위로 설정
    const centers = [dataset[Math.floor(Math.random() * dataset.length)]];

    // 4. 2~3의 과정을 설정된 K 변수 만큼의 중심점이 설정될 때 까지 반복
    while (centers.length < this.K) {
      // 2. 설정된 중심점과 데이터 간의 거리 계산
      const distances = this.calcDistances({ dataset, centers });

      // 3. 거리의 총합이 최대인 데이터 포인트를 다음 중심으로 설정
      const totalDistances = distances.map((distance) =>
        distance.reduce((acc, cur) => acc + cur, 0)
      );
      const nextCenterIdx = totalDistances.getMaxIdx();
      centers.push(dataset[nextCenterIdx]);
    }

    return centers;
  }

  calcDistances({ dataset, centers }: IKMeansMethodParams): number[][] {
    if (!dataset || !centers)
      throw Errors.EmptyRequiredParameters("dataset", "centers");

    const distances = [];
    for (let data of dataset) {
      const distance = centers.map((center) => euclideanDistance(center, data));
      distances.push(distance);
    }

    return distances;
  }

  setLabels({ distances }: IKMeansMethodParams): number[] {
    if (!distances) throw Errors.EmptyRequiredParameters("distances");
    return distances.map((distance) => distance.getMinIdx());
  }

  moveCenters({
    dataset,
    centers,
    labels,
  }: IKMeansMethodParams): number[][] | null {
    if (!dataset || !centers || !labels)
      throw Errors.EmptyRequiredParameters("dataset", "centers", "labels");

    const colSize = dataset[0].length;
    const labelCount = Array(this.K).fill(0);
    const labelTotal = Array.from({ length: this.K }, () =>
      Array(colSize).fill(0)
    );

    for (let i = 0; i < dataset.length; i++) {
      const label = labels[i];
      const data = dataset[i];
      labelCount[label]++;
      labelTotal[label] = labelTotal[label].map((v, vi) => v + data[vi]);
    }
    const nextCenters = labelCount.map((count, label) =>
      labelTotal[label].map((total) => total / count)
    );

    const prev = centers.flat();
    const next = nextCenters.flat();
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] !== next[i]) return nextCenters;
    }
    return null;
  }

  calcInertia({ dataset, centers, labels }: IKMeansMethodParams): number {
    if (!dataset || !centers || !labels)
      throw Errors.EmptyRequiredParameters("dataset", "centers", "labels");

    let inertia = 0;
    for (let i = 0; i < dataset.length; i++) {
      const a = dataset[i];
      const b = centers[labels[i]];
      const sse = a.reduce((acc, cur, j) => acc + (cur - b[j]) ** 2, 0);
      inertia += sse;
    }

    return inertia;
  }

  fit({ dataset }: IKMeansMethodParams): IKMeansResult {
    // 1. K개의 초기 중심점 설정
    let centers = this.initCenters({ dataset });
    while (true) {
      // 2. 중심점과 데이터 간의 거리 계산
      const distances = this.calcDistances({ dataset, centers });
      // 3. 최소 거리 중심점의 군집 번호를 데이터에 부여
      const labels = this.setLabels({ distances });
      // *. 평가
      const inertia = this.calcInertia({ dataset, centers, labels });
      // 4. 군집 별 평균값을 계산하여 중심점에 반영
      const nextCenters = this.moveCenters({ dataset, centers, labels });
      // 5. 2~4의 과정을 중심점에 변화가 없을 때까지 반복
      if (!nextCenters) return { centers, labels, inertia };
      centers = nextCenters;
    }
  }
}
