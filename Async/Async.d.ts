import {
    NullaryFunction,
    UnaryFunction,
    VariadicFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare function Async<R = any, L = Error>(fn: (reject: UnaryFunction<L>, resolve: UnaryFunction<R>) => void): Async<R,L>;

declare class Async<Right = any, Left = Error> implements Functor<Right>, Monad<Right>, Applicative<Right> {
    map<RETURN=Right, R=Right>(fn: UnaryFunction<RETURN,R>): Async<R, Left>;
    chain<RETURN=Right, R=Right>(fn: UnaryFunction<Async<RETURN, Left>, R>): Async<RETURN, Left>;
    bichain<R= Right, L= Left>(fn1: UnaryFunction<Async<R,L>, L>, fn2: UnaryFunction<Async<R,L>, R>): Async<R,L>;
    ap(val: Async): Async<Right, Left>;
    alt<R= Right, L= Left>(val: Async<R,L>): Async<R,L>;
    bimap<R= Right, L= Left>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<R, L>;
    coalesce<R= Right, L= Left>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<R,R>;
    swap<R= Right, L= Left>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Async<L,R>;
    race<R= Right, L= Left>(val: Async<R,L>): Async<R,L>;
    fork<R= Right, L= Left>(reject: UnaryFunction<L>, resolve: UnaryFunction<R>): any;
    fork<R= Right, L= Left>(reject: UnaryFunction<L>, resolve: UnaryFunction<R>, cancel: NullaryFunction): any;
    toPromise<R = Right>(): Promise<R>;
    valueOf(): boolean;
    type():string;
    static fromPromise<R>(fn: VariadicFunction<Promise<R>>): VariadicFunction<Async<R>>;
    static fromNode<R=any, L=Error,>(fn: Function): VariadicFunction<Async<R,L>>;
    static all(val: Async[]): Async;
    static resolveAfter<R>(delay: number, val: R): Async<R>;
    static rejectAfter<R=any, L=Error>(delay: number, val: L): Async<R, L>;
    static of<R>(val: R): Async<R>;
    static Rejected<R=any, L=Error>(val: L): Async<R, L>;
    static Resolved<R>(val: R): Async<R>;
}
export default Async;
