import {
    UnaryFunction,
    Functor,
    Monad,
    Applicative
} from '../internal/index';

declare function Either<Left, Right>(val: Right): Either<Left,Right>;

declare class Either<Left, Right> implements Functor<Right>, Monad<Right>, Applicative<Right>  {
    map<RETURN=Right, R=Right>(fn: UnaryFunction<RETURN>): Either<Left,R>;
    chain<RETURN=Right, R=Right>(fn: UnaryFunction<Either<Left,RETURN>, R>): Either<Left,R>;
    bichain<L=Left, R=Right>(fn1: UnaryFunction<Either<L,R>, L>, fn2: UnaryFunction<Either<L,R>, R>): Either<L,R>;
    ap<R= Right>(val: Either<Left,R>): Either<Left,R>;
    equals<R=Right>(val: R): boolean;
    concat<R=Right>(other: Either<Left, R>): Either<Left, R>;
    alt<R=Right>(other: Either<Left, R>): Either<Left, R>;
    bimap<L=Left, R=Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Either<L,R>;
    sequence(val: unknown): any;//TODO: Completar el tipo aca
    traverse(val: unknown): any;//TODO: Completar el tipo aca
    coalesce<L=Left, R=Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Either<L,R>;
    swap<L=Left, R=Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): Either<L,R>;
    either<L=Left, R=Right>(fn1: UnaryFunction<L>, fn2: UnaryFunction<R>): any;
    valueOf<R=Right>(): R;
    type():string;
    static of<R>(val: R): Either<any, R>;
    static Left<L,R=any>(val: L): Either<L, R>;
    static Right<L,R=L>(val: R): Either<L, R>;
}

export default Either;
