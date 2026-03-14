import './App.css'
import Answer from './Answer'
import { useState } from 'react'
import Question from './Question'
function FlashCard({ num, question, answer, difficulty }) {
    let [isQuestion, setIsQuestion] = useState(true)
    function cardClicked() {
        if (isQuestion) setIsQuestion(false)
        else setIsQuestion(true)
    }
    return (
        <div className={`cards ${!isQuestion ? `border-${difficulty.toLowerCase()}` : ''}`} onClick={cardClicked}>
            {isQuestion ? (
                <Question num={num} question={question} difficulty={difficulty} />
            ) : (<Answer question={question} answer={answer} difficulty={difficulty} />)}
        </div>
    )
}
export default FlashCard