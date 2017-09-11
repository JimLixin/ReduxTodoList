import { loadState, saveState } from './localStorage'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import throttle from 'lodash/throttle';
import rootReducer from './reducers'

// const logger = (store) => {
//     return (next) => {
//         if(!console.group){
//             return next;
//         }

//         return (action) => {
//             console.group(action.type);
//             console.log('%c prev state', 'color: gray', store.getState());
//             console.log('%c action', 'color: blue', action);
//             const returnValue = next(action);
//             console.log('%c next state', 'color: green', store.getState());
//             console.groupEnd(action.type);
//             return returnValue;
//         }
//     }
// }

// const promise = (store) => {
//     return (next) => {
//         return (action) => {
//             if(typeof action.then === 'function'){
//                 return action.then(next);
//             }
//             return next(action);
//         }
//     }
// }


const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;