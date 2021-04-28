import {
    UnaryFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare function Result<ERR, OK>(val: OK): Result<ERR,OK>;

declare class Result<ERR, OK> implements Functor<OK>, Monad<OK>, Applicative<OK>  {
    map<R = OK>(fn: UnaryFunction<R>): Result<ERR,R>;
    chain<R= OK>(fn: UnaryFunction<Result<ERR,R>, R>): Result<ERR,R>;
    bichain<L=ERR, R=OK>(fn1: UnaryFunction<Result<L,R>, L>, fn2: UnaryFunction<Result<L,R>, R>): Result<L,R>;
    ap<R= OK>(val: Result<ERR,R>): Result<ERR,R>;
    equals<R=OK>(val: R): boolean;
    concat<R=OK>(other: Result<ERR, R>): Result<ERR, R>;
    alt<R=OK>(other: Result<ERR, R>): Result<ERR, R>;
    bimap<L=ERR, R=OK>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Result<L,R>;
    sequence(val: unknown): any;//TODO: Completar el tipo aca
    traverse(val: unknown): any;//TODO: Completar el tipo aca
    coalesce<L=ERR, R=OK>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Result<L,R>;
    swap<L=ERR, R=OK>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Result<L,R>;
    either<L=ERR, R=OK>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): any;
    valueOf<R=OK>(): R;
    type():string;
    static of<R>(val: R): Result<any, R>;
    static Ok<L,R=any>(val: L): Result<L, R>;
    static Err<L,R=L>(val: R): Result<L, R>;
}

export default Result;
