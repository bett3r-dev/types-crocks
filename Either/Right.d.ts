import { UnaryFunction } from '../internal/index';
import Either from './Either';

declare function Right<L, R=L>(val: R): Either<L,R>;

declare class Right<L,R=L> extends Either<L,R> {
    equals<T=R>(val: T): boolean;
    concat<T=R>(other: Either<L,T>): Either<L,T>;
    map<T=R>(fn: UnaryFunction<T>): Right<L,T>;
    valueOf<T=R>(): T;
}

export default Right;
