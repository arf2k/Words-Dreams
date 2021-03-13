import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { renderWord, setWord } from "../../redux/words/wordsActions"


const key = process.env.REACT_APP_WORDNIK_KEY

const WordFetch = ({setWord, renderWord}) => {

     const [wordOfDay, setWordOfDay] = useState("")
let date = "2019-10-24"
     useEffect(() => {
          fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${date}&api_key=${key}`)
          .then(resp => resp.json())
          .then(data => {
               setWordOfDay(data.word)
               setWord(data)   
               renderWord(data)
          })
          .catch(error => console.log(error))
     }, [date, setWord])


      
     
     return( 
<h1>Word: {wordOfDay}</h1>          
     )



}
const mapDispatchToProps = dispatch => ({
     setWord: data => dispatch(setWord(data)),
     renderWord: data => dispatch(renderWord(data))
})

export default connect(null, mapDispatchToProps)(WordFetch)