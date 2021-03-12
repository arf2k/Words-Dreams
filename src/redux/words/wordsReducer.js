import WordsActionTypes from "./wordsTypes"

const INITIAL_STATE = {
     wordData: {}
}

const wordsReducer = (state = INITIAL_STATE, action ) => {
switch(action.type){ 
     case WordsActionTypes.SET_WORD:
          return{
               ...state,
               wordData: [...state, action.payload]
          }
     default:
     return state
}
}
export default wordsReducer