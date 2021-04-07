export * from './BinaryFunction';
export * from './NodeCallback';
export * from './NullaryFunction';
export * from './PredicateFunction';
export * from './TernaryFunction';
export * from './UnaryFunction';
export * from './VariadicFunction';


export declare interface Functor<T>{
    map(fn: (arg: T)=>T): Functor<T>;
}
export declare interface Monad<T>{
    chain(fn: (arg: T)=>Monad<T>): Monad<T>;
}
export declare interface Applicative<T>{
    ap(val: Applicative<T>): Applicative<T>;
}

//TODO: Falta semigroup
//TODO: Falta bifunctor
//TODO: Falta bimonad
//TODO: Falta alt
