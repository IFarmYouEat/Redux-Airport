import { applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';

const airlineList = (state = [], action) => {
    if(action.type === 'ADD_AIRLINE'){
        return[...state, action.payload];
    }
    return state;
}


const reduxStore = createStore(
    combineReducers({
        airlineList,
    }),
    applyMiddleware(logger)
);



export default reduxStore;