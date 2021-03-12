import WordsActionTypes from "./wordsTypes";

export const setWord = (data) => ({
     type: WordsActionTypes.SET_WORD,
     payload: data
})