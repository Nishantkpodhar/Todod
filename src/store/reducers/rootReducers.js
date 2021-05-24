import {combineReducers} from 'redux';
import Todos from './TodoReducers';

const rootReduceswr = combineReducers({
    todos:Todos
})

export default rootReduceswr;
