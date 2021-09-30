import {
  UnaryFunction,
  Functor,
  Monad,
  Applicative
} from '../internal/index';

declare function Reader<R, ENV>(fn: (env: ENV) => R): Reader<R, ENV>;

declare class Reader<R, ENV> implements Functor<R>, Monad<R>, Applicative<R>  {
  map<RETURN=R, VALUE=R>(fn: UnaryFunction<RETURN, VALUE>): Reader<R, ENV>;
  chain<RETURN=R, VALUE=R>(fn: UnaryFunction<Reader<RETURN, ENV>, VALUE>): Reader<RETURN, ENV>;
  ap<O= R>(val: Reader<O,ENV>): Reader<O,ENV>;
  runWith<E = ENV>(env: E): Reader<R, E>;
  type():string;
  static of<R, ENV = any>(val: R): Reader<R, ENV>;
  static ask<R, ENV>(fn?: (env: ENV) => R): Reader<R, ENV>;
}

export default Reader;
