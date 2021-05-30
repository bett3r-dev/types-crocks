import { UnaryFunction } from '../internal/index';

declare function Pred<T>(fn: UnaryFunction<boolean, T>): Pred<T>;

declare class Pred<T> {
    concat(val: Pred<T>): Pred<T>;
    contramap(fn: UnaryFunction<boolean, T>): Pred<T>;
    valueOf(): (val: T) => boolean;
    runWith(val: T): boolean;
    static empty<T>(): Pred<T>;
}

export default Pred;
