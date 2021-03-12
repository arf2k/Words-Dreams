import { combineReducers } from "redux";
import wordsReducer from "./words/wordsReducer"

const rootReducer = combineReducers({
     words: wordsReducer
})

export default rootReducer 