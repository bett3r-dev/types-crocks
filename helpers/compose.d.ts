/**
 * compose :: ((y -> z), ..., (a -> b)) -> a -> z
 */
declare function compose<Z>(...args: Function[]): Z;

export default compose;
