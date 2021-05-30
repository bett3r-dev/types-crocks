import { Applicative, Functor, Monad, UnaryFunction, Monoid, MonoidInstance } from "crocks/internal";
import Pair from "crocks/Pair";

declare function Writer<T, M>(monoid: Monoid<M>): <TYPE = T>(entry: M, value: TYPE) => Writer<TYPE, M>;

declare class Writer<T, M> implements Functor<T>, Monad<T>, Applicative<T> {
    map<RETURN=T>(fn: UnaryFunction<RETURN,T>): Writer<T,M>;
    chain<RETURN=T>(fn: UnaryFunction<Writer<RETURN,M>, T>): Writer<RETURN,MonoidInstance<M>>;
    ap(val: Writer<T,M>): Writer<T,M>;
    equals: (otherWriter: Writer<T,M>) => boolean
    of: <T>(value:T) => Writer<T,M>
    log: () => MonoidInstance<M>
    read: () => Pair<M,T>
    valueOf(): boolean;
    type():string;

    static of<T, M>(val: T): Writer<T, MonoidInstance<M>>;
}

export default Writer;
