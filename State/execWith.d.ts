import State from './State';

// execWith :: s -> State s a -> s
declare function execWith<STATE,VALUE>(val: VALUE, state: State<STATE,VALUE>): STATE;
declare function execWith<STATE,VALUE>(val: VALUE): (state: State<STATE,VALUE>) => STATE;

export default execWith;
