import React, {useSelector} from "react";
import { connect } from "react-redux";
import { renderWord } from "../../redux/words/wordsActions"


const WordRender = ({wordData}) => {

     console.log(wordData)
     return(
     <>
     <h1>Word of the day: </h1>

<h1>Definitions:  </h1>
</>
)

}

const mapStateToProps = state => ({
   wordData: state.wordData
})


export default connect(mapStateToProps)(WordRender)