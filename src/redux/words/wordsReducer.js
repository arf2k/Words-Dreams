import WordsActionTypes from "./wordsTypes"

const INITIAL_STATE = {
     wordData: {}
}

const wordsReducer = (state = INITIAL_STATE, action ) => {
switch(action.type){ 
     case WordsActionTypes.SET_WORD:
          if(state.wordData.length > 0){
               return true
          }
     case WordsActionTypes.RENDER_WORD:
          return {
               ...state,
               wordData: [action.payload]
          }

     default:
     return state
}
}
export default wordsReducer