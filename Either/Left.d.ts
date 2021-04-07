import { UnaryFunction } from '../internal/index';
import Either from './Either';

declare function Left<L, R=L>(val: L): Either<L, R>;

declare class Left<L,R=L> extends Either<L,R> {
    equals<T=L>(val: T): boolean;
    concat<T=L>(other: Either<T,R>): Either<T,R>;
    map<T=L>(fn: UnaryFunction<T>): Left<T,R>;
    valueOf<T=L>(): T;
}

export default Left;
