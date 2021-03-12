import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setWord } from "../../redux/words/wordsActions"


const key = process.env.REACT_APP_WORDNIK_KEY

const WordFetch = () => {

     const [wordOfDay, setWordOfDay] = useState("")
     // const [definitions, setDefinitions] = useState([])
let date = "2019-10-24"
     useEffect(() => {
          fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${date}&api_key=${key}`)
          .then(resp => resp.json())
          .then(data => {
               console.log(data)
               setWordOfDay(data.word)
               setWord(data)   
          })
          .catch(error => console.log(error))
     }, [date])


      
     
     return( 
<h1>Word: {wordOfDay}</h1>          
     )



}
const mapDispatchToProps = dispatch => ({
     setWord: data => dispatch(setWord(data))
})

export default connect(null, mapDispatchToProps)(WordFetch)