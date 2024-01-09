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
    return [];
  }

  calcDistances({ centers }: IKMeansMethodParams): number[][] {
    return [];
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
