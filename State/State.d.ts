import { Applicative, Functor, Monad, UnaryFunction } from '../internal/index';
import Pair from '../Pair';

declare function State<VALUE, STATE>(val: (state: VALUE) => Pair<VALUE,STATE>): State<STATE, VALUE>;

declare class State<STATE, VALUE> implements Functor<VALUE>, Monad<VALUE>, Applicative<VALUE> {
    map<V=VALUE>(fn: UnaryFunction<V>): State<STATE,V>;
    chain<S=STATE, V=VALUE>(val: (state: V) => Pair<V,S>): State<S,V>;
    ap<V=VALUE>(val: State<STATE,V>): State<STATE,V>;
    runWith<S=STATE, V=VALUE>(val: V): Pair<V, S>;
    evalWith<S=STATE, V=VALUE>(val: S): V;
    execWith<S=STATE>(val: S): S;
    static get<STATE>(): State<STATE,STATE>;
    static get<STATE,VALUE>(fn: UnaryFunction<VALUE,STATE>): State<STATE,VALUE>;
    static modify<STATE>(fn: UnaryFunction<STATE>): State<STATE, undefined>;
    static put<STATE>(fn: UnaryFunction<STATE>): State<STATE, undefined>;
    static of<STATE,VALUE>(val: VALUE): State<STATE,VALUE>;
}

export default State;
