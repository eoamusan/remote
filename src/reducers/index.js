import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import counter from './counter'

export default (history) => combineReducers({
    router: connectRouter(history),
    counter
})