import {
    NullaryFunction,
    UnaryFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare interface Nothing<T=undefined> extends Maybe<T> {
    (): Nothing<T>;
}

declare interface Just<T> extends Maybe<T> {
    (val: unknown): Just<T>;
}

declare function Maybe<T>(val: T): Maybe<T>;

declare class Maybe<Right> implements Functor<Right>, Monad<Right>, Applicative<Right> {
    map<T=Right>(fn: UnaryFunction<T>): Maybe<T>;
    chain<T=Right>(fn: UnaryFunction<T,Maybe<T>>): Maybe<T>;
    ap<T=Right>(val: Maybe<T>): Maybe<T>;
    equals<T>(val: T): boolean;
    concat<T=Right>(other: Maybe<T>): Maybe<T>;
    alt<T=Right>(val: Maybe<T>): Maybe<T>;
    coalesce<T=Right>(fn1: NullaryFunction, fn2: UnaryFunction): Maybe<T>;
    bichain<T=Right>(fn1: NullaryFunction<Maybe<T>>, fn2: UnaryFunction<Maybe<T>>): Maybe<T>;
    either<T=Right>(fn1: NullaryFunction, fn2: UnaryFunction<T>): T;
    sequence(val: unknown): any; //TODO: Completar el tipo aca
    traverse(val: unknown): any; //TODO: Completar el tipo aca
    option<T=Right>(val: T): any; //TODO: Completar el tipo aca
    type():string;
    static of<T>(val: T): Just<T>;
    static zero(): Nothing;
    static Nothing: (val: unknown) => Nothing;
    static Just<T>(val: T): Just<T>;
}

export default Maybe;
