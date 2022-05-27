import { combineReducers } from "redux";
import{ToDoListReducer} from './ToDoListReducer'

//store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi đây chứa các reducer  cho nghiệp vụ (store con)
    ToDoListReducer,
    
})