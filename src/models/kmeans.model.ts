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
  moveCenters: KMeansMethod;
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
    return [];
  }

  moveCenters({ dataset, labels }: IKMeansMethodParams): number[][] {
    return [];
  }

  calcInertia({ dataset, centers, labels }: IKMeansMethodParams): number {
    return 0;
  }

  fit({ dataset }: IKMeansMethodParams): IKMeansResult {
    return {
      centers: [],
      labels: [],
      inertia: 0,
    };
  }
}
