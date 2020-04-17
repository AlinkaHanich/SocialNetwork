import { createStore, combineReducers } from "redux";
import profilesPageReducer from './reducers/profilesPageReducer'
import messagesPageReducer from './reducers/messagesPageReducer'


let reducers = combineReducers({
    profilesPage: profilesPageReducer,
    messagesPage: messagesPageReducer
})
let store = createStore(reducers);
export default store;