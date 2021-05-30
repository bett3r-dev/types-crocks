/**
 * composeK :: Chain m => ((y -> m z), ..., (a -> m b)) -> a -> m z
 */
declare function composeK<Z>(...args: Function[]): Z;

export default composeK;
