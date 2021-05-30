import { Applicative, Functor, Monad, UnaryFunction, Monoid } from "crocks/internal";
import Pair from "crocks/Pair";

declare function Writer<T, M>(monoid: Monoid<M>): Writer<T, Monoid<M>>;

declare class Writer<T, M> implements Functor<T>, Monad<T>, Applicative<T> {
    map<RETURN=T>(fn: UnaryFunction<RETURN,T>): Writer<T,M>;
    chain<RETURN=T>(fn: UnaryFunction<Writer<RETURN,Monoid<M>>, T>): Writer<RETURN,Monoid<M>>;
    ap(val: Writer<T,M>): Writer<T,M>;
    equals: (otherWriter: Writer<T,M>) => boolean
    of: <T>(value:T) => Writer<T,M>
    log: () => Monoid<M>
    read: () => Pair<Monoid<M>,T>
    valueOf(): boolean;
    type():string;

    static of<T, M>(val: T): Writer<T, Monoid<M>>;
}

export default Writer;
