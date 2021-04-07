import Maybe from './Maybe';

/**
 * getPath :: [ (String | Integer) ] -> a -> Maybe b
 */
//TODO: Get path would work with arrays?
declare function getPath<T>(path: ReadonlyArray<string | number>, val: T[]|Record<string, T>): Maybe<T>;
declare function getPath<T>(path: ReadonlyArray<string | number>): (val: T[]|Record<string,T>) => Maybe<T>;

export default getPath;
