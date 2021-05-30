export * from './BinaryFunction';
export * from './NodeCallback';
export * from './NullaryFunction';
export * from './PredicateFunction';
export * from './TernaryFunction';
export * from './UnaryFunction';
export * from './VariadicFunction';

export interface Monoid<T>{
    (initial?: T): MonoidInstance<T>;
    '@@implements': (test: string) => boolean;
    empty: () => MonoidInstance<T>;
    type: () => string;
    '@@type': () => string;
}

export type mapFunction<T> = (arg: any)=>T | mapFunction<T>;
export declare interface Functor<T>{
    map(fn: mapFunction<T>): Functor<T>;
}

export type chainFunction<T> = (arg: any)=>Monad<T> | chainFunction<T>;
export declare interface Monad<T>{
    chain(fn: chainFunction<T>): Monad<T>;
}
export declare interface Applicative<T>{
    ap(val: Applicative<T>): Applicative<T>;
}
export declare interface SemiGroup<T>{
    concat(other: SemiGroup<T>): SemiGroup<T>;
}

//TODO: Falta bifunctor
//TODO: Falta bimonad
//TODO: Falta alt
