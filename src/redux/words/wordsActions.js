import WordsActionTypes from "./wordsTypes";

export const setWord = ( wordData ) => ({
     type: WordsActionTypes.SET_WORD,
     payload: wordData
    
})

export const renderWord = ( wordData ) => ({
     type: WordsActionTypes.RENDER_WORD,
     payload: {
          word: wordData.word, 
          definitions: [wordData.definitions],
          examples: [wordData.examples], 
          notes: wordData.note
     }
     
})