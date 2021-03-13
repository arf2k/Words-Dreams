import { createSelector } from "reselect"

const selectPart = (state) => state.wordData

export const selectWord = createSelector(
[selectPart], 
wordData => wordData.word
)

export const selectDefinitions = createSelector(
     [selectPart],
     wordData => wordData.definititions.map(definition => definition.text)
)