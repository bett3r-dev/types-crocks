import {
    NodeCallback,
    NullaryFunction,
    UnaryFunction,
    VariadicFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare function Async<L, R = any>(fn: (reject: UnaryFunction<L>, resolve: UnaryFunction<R>) => R): Async<L,R>;

declare class Async<Left, Right> implements Functor<Right>, Monad<Right>, Applicative<Right> {
    map<R = Right>(fn: UnaryFunction<R>): Async<Left,R>;
    chain<R= Right>(fn: UnaryFunction<R, Async<Left,R>>): Async<Left,R>;
    ap<R= Right>(val: Async<Left,R>): Async<Left,R>;
    alt<L = Left,R = Right>(val: Async<L,R>): Async<L,R>;
    bimap<L= Left, R= Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<L,R>;
    coalesce<L= Left, R= Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<R,R>;
    bichain<L= Left, R= Right>(fn1: UnaryFunction<Async<L,R>>, fn2: UnaryFunction<Async<L,R>>): Async<L,R>;
    swap<L= Left, R= Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<R,L>;
    race<L= Left, R= Right>(val: Async<L,R>): Async<L,R>;
    fork<L= Left, R= Right>(reject: UnaryFunction<L,any>, resolve: UnaryFunction<R,any>): any;
    fork<L= Left, R= Right>(reject: UnaryFunction<L,any>, resolve: UnaryFunction<R,any>, cancel: NullaryFunction): any;
    toPromise<R = Right>(): Promise<R>;
    valueOf(): boolean;
    static fromPromise<L=any,R=any>(fn: VariadicFunction<Promise<R>>): VariadicFunction<Async<L,R>>;
    static fromNode<L=any,R=any>(fn: VariadicFunction<NodeCallback<R>>): VariadicFunction<Async<L,R>>;
    static all<L=any,R=any>(val: Async<L,R>[]): Async<L,R>;
    static resolveAfter<L=any,R=any>(delay: number, val: unknown): Async<L,R>;
    static rejectAfter<L=any,R=any>(delay: number, val: unknown): Async<L,R>;
    static of<L=any,R=any>(val: unknown): Async<L,R>;
    static Rejected<L=any,R=any>(val: L): Async<L,R>;
    static Resolved<R>(val: R): Async<any,R>;
}

export default Async;
