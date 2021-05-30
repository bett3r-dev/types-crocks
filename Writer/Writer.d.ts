import { Applicative, Functor, Monad, UnaryFunction, Monoid } from "crocks/internal";
import Pair from "crocks/Pair";

declare function Writer<T>(monoid: Monoid<T>): Writer<T, Monoid<T>>;

declare class Writer<T, M extends Monoid<T>> implements Functor<T>, Monad<T>, Applicative<T> {
    map<RETURN=T>(fn: UnaryFunction<RETURN,T>): Writer<T,M>;
    chain<RETURN=T>(fn: UnaryFunction<Writer<RETURN,Monoid<RETURN>>, T>): Writer<RETURN,Monoid<RETURN>>;
    ap(val: Writer<T,M>): Writer<T,M>;
    equals: (otherWriter: Writer<T,M>) => boolean
    log: () => M
    read: () => Pair<M,T>
    valueOf(): boolean;
    type():string;

    static of<T>(val: T): Writer<T, Monoid<T>>;
}

export default Writer;
