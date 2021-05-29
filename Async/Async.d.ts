import {
    NullaryFunction,
    UnaryFunction,
    VariadicFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare function Async<L, R = any>(fn: (reject: UnaryFunction<L>, resolve: UnaryFunction<R>) => R): Async<L,R>;

declare class Async<Left, Right> implements Functor<Right>, Monad<Right>, Applicative<Right> {
    map<RETURN=Right, R=Right>(fn: UnaryFunction<RETURN,R>): Async<Left,R>;
    chain<RETURN=Right, R=Right>(fn: UnaryFunction<Async<Left,RETURN>, R>): Async<Left,RETURN>;
    bichain<L= Left, R= Right>(fn1: UnaryFunction<Async<L,R>, L>, fn2: UnaryFunction<Async<L,R>, R>): Async<L,R>;
    ap(val: Async<Left,any>): Async<Left,Right>;
    alt<L = Left,R = Right>(val: Async<L,R>): Async<L,R>;
    bimap<L= Left, R= Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<L,R>;
    coalesce<L= Left, R= Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<R,R>;
    swap<L= Left, R= Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<R,L>;
    race<L= Left, R= Right>(val: Async<L,R>): Async<L,R>;
    fork<L= Left, R= Right>(reject: UnaryFunction<L>, resolve: UnaryFunction<R>): any;
    fork<L= Left, R= Right>(reject: UnaryFunction<L>, resolve: UnaryFunction<R>, cancel: NullaryFunction): any;
    toPromise<R = Right>(): Promise<R>;
    valueOf(): boolean;
    type():string;
    static fromPromise<R>(fn: VariadicFunction<Promise<R>>): VariadicFunction<Async<Error,R>>;
    static fromNode<L=any,R=any>(fn: Function): VariadicFunction<Async<L,R>>;
    static all<L,R>(val: Async<L,R>[]): Async<L,R>;
    static resolveAfter<R>(delay: number, val: R): Async<any,R>;
    static rejectAfter<L, R=any>(delay: number, val: L): Async<L, R>;
    static of<R>(val: R): Async<any,R>;
    static Rejected<L, R=any>(val: L): Async<L,R>;
    static Resolved<R>(val: R): Async<any,R>;
}

export default Async;
