import Errors from "../errors";
import { euclideanDistance } from "../utils";

interface IKMeansSetting {
  K: number;
}

type KMeansFunctionTypeOne<R = any, T1 = any> = (t1: T1) => R;
type KMeansFunctionTypeTwo<R = any, T1 = any, T2 = any> = (t1: T1, t2: T2) => R;
type KMeansFunctionTypeThree<R = any, T1 = any, T2 = any, T3 = any> = (
  t1: T1,
  t2: T2,
  t3: T3
) => R;
type KMeansFunction<R = any, T1 = any, T2 = any, T3 = any> =
  | KMeansFunctionTypeOne<R, T1>
  | KMeansFunctionTypeTwo<R, T1, T2>
  | KMeansFunctionTypeThree<R, T1, T2, T3>;

declare function stringOrNum<R>(p1: number[]): R;
declare function stringOrNum<R>(p1: number[][], p2: number[][]): R;
declare function stringOrNum<R>(
  p1: number[][],
  p2: number[][],
  p3: number[]
): R;

/** argument inferring borrowed from lodash definitions */
/*
export function createAction<Payload>(
    actionType: string,
    payloadCreator: ActionFunction0<Payload>
): ActionFunction0<Action<Payload>>;

export function createAction<Payload, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>
): ActionFunction1<Arg1, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>
): ActionFunction2<Arg1, Arg2, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>
): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>;

export function createAction<Payload>(
    actionType: string
): ActionFunction1<Payload, Action<Payload>>;

export type ActionFunction0<R> = () => R;
export type ActionFunction1<T1, R> = (t1: T1) => R;
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
export type ActionFunctionAny<R> = (...args: any[]) => R;
*/

type KMeansMethod1<T1, R> = (t1: T1) => R;
type KMeansMethod2<T1, T2, R> = (t1: T1, t2: T2) => R;
type KMeansMethod3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
type KMeansMethod<R, T1, T2 = never, T3 = never> = T3 extends never
  ? KMeansMethod1<T1, R>
  : any;

interface IKMeans extends IKMeansSetting {
  initCenters: KMeansMethod<number[][], number[][]>;
  calcDistances: KMeansMethod<number[][], number[][], number[][]>;
  setLabels: KMeansMethod<number[][], number[]>;
  moveCenters: KMeansMethod<number[][], number[][], number[][]>;
  calcInertia: KMeansMethod<number[][], number[][], number[], number>;
}

export class KMeans implements IKMeans {
  constructor(public K: number) {}

  initCenters(dataset: number[][]): number[][] {
    return [];
  }

  calcDistances(dataset: number[][], centers: number[][]): number[][] {
    return [];
  }

  setLabels(distances: number[][]): number[] {
    return [];
  }

  moveCenters(dataset: number[][], labels: number[][]): number[][] {
    return [];
  }

  calcInertia(
    dataset: number[][],
    centers: number[][],
    labels: number[]
  ): number {
    return 0;
  }
}
