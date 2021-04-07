import {createStore} from 'redux'
import ValReducer from '../Reducers/ValueReducer'


const Store = createStore(ValReducer)

export default Store