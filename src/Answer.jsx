import './App.css'
import Level from './Level'
function Answer({question, answer, difficulty}) {
    return (
        <div className="answer">
            <div className='answer-tag'>
                <p className='font-small inter-medium colorba'>Answer :</p>
                <Level label={difficulty} style={difficulty.toLowerCase()} levelcss='level-answer' />
            </div>
            <h3 className='hanken-semibold font-20 colorwhite'>{question}</h3>
            <h4 className='hanken-medium font-medium colorba'>{answer}</h4>
        </div>
    )

}
export default Answer