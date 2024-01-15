declare interface IKMeansMethodParams {
  dataset?: number[][];
  centers?: number[][];
  distances?: number[][];
  labels?: number[];
}

declare interface IKMeansResult extends IKMeansMethodParams {
  inertia: number;
}

declare type KMeansMethod<R = number[][]> = (params: IKMeansMethodParams) => R;

declare interface IKMeansSetting {
  K: number;
  dataset?: number[][];
  centers?: number[][];
}
declare interface IKMeans extends IKMeansSetting, Iterable<IKMeansResult> {
  fit: KMeansMethod<IKMeansResult | undefined>;
  steps: KMeansMethod<IKMeansResult[]>;
}
declare interface IKMeansIterator
  extends IKMeansSetting,
    IterableIterator<IKMeansResult> {
  initCenters: KMeansMethod;
  calcDistances: KMeansMethod;
  setLabels: KMeansMethod<number[]>;
  moveCenters: KMeansMethod<number[][] | null>;
  calcInertia: KMeansMethod<number>;
}
