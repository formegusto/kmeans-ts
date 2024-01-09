interface IKMeansSetting {
  K: number;
}

interface IKmeansMethodParams {
  dataset?: number[][];
  centers?: number[][];
  distances?: number[][];
  labels?: number[];
}

interface IKMeansResult extends IKmeansMethodParams {
  inertia: number;
}

type KMeansMethod<R = number[][]> = (params: IKmeansMethodParams) => R;
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

  initCenters({ dataset }: IKmeansMethodParams): number[][] {
    return [];
  }

  calcDistances({ centers }: IKmeansMethodParams): number[][] {
    return [];
  }

  setLabels({ distances }: IKmeansMethodParams): number[] {
    return [];
  }

  moveCenters({ dataset, labels }: IKmeansMethodParams): number[][] {
    return [];
  }

  calcInertia({ dataset, centers, labels }: IKmeansMethodParams): number {
    return 0;
  }

  fit({ dataset }: IKmeansMethodParams): IKmeansMethodParams {
    return {
      centers: [],
      labels: [],
      inertia: 0,
    };
  }
}
