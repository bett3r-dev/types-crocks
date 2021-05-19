import { UnaryFunction } from "../internal";

/**
 * map :: (a -> b) -> m a -> m b
 */
 declare function map<R, T>(fn: UnaryFunction<R>, adt: T): T;
 declare function map<R, T>(fn: UnaryFunction<R>): (adt: T) => T;

export default map;
