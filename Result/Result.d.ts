import {
    UnaryFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare function Result<OK>(val: OK): Result<OK>;

declare class Result<OK, ERR=Error> implements Functor<OK>, Monad<OK>, Applicative<OK>  {
    map<RETURN=OK, R=OK>(fn: UnaryFunction<RETURN,R>): Result<R, ERR>;
    chain<RETURN=OK, R=OK>(fn: UnaryFunction<Result<RETURN, ERR>, R>): Result<RETURN, ERR>;
    bichain<E=ERR, O=OK>(fn1: UnaryFunction<Result<O,E>, E>, fn2: UnaryFunction<Result<O,E>, O>): Result<O,E>;
    ap<O= OK>(val: Result<O,ERR>): Result<O,ERR>;
    equals<O=OK>(val: O): boolean;
    concat<O=OK>(other: Result<O,ERR>): Result<O,ERR>;
    alt<O=OK>(other: Result<O,ERR>): Result<O,ERR>;
    bimap<E=ERR, O=OK>(fn1: UnaryFunction<E>, fn2: UnaryFunction<O>): Result<O,E>;
    sequence(val: unknown): any;//TODO: Completar el tipo aca
    traverse(val: unknown): any;//TODO: Completar el tipo aca
    coalesce<E=ERR, O=OK>(fn1: UnaryFunction<E>, fn2: UnaryFunction<O>): Result<O,E>;
    swap<E=ERR, O=OK>(fn1: UnaryFunction<E>, fn2: UnaryFunction<O>): Result<O,E>;
    either<E=ERR, O=OK>(fn1: UnaryFunction<E>, fn2: UnaryFunction<O>): any;
    valueOf<O=OK>(): O;
    type():string;
    static of<OK>(val: OK): Result<OK,Error>;
    static Ok<O,E=Error>(val: O): Result<O,E>;
    static Err(val: Error): Result<any,Error>;
}

export default Result;
