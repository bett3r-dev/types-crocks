import { UnaryFunction } from '../internal/index';

declare function Identity<T>(val: T): Identity<T>;

declare class Identity<TYPE> {
    equals<T=TYPE>(val: T): boolean;
    concat<T=TYPE>(val: Identity<T>): Identity<T>;
    map<T=TYPE>(fn: UnaryFunction<T>): Identity<T>;
    chain<T=TYPE>(fn: UnaryFunction<Identity<T>, T>): Identity<T>;
    ap<T=TYPE>(val: Identity<T>): Identity<T>;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    valueOf<T=TYPE>(): T;
    type():string;
    static of<T>(val: T): Identity<T>;
}

export default Identity;
