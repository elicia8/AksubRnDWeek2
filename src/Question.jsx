import './App.css'
import Level from './Level'
function Question({ num, question, difficulty }) {
    return (
        <>
            <p className='font-small inter-medium'>Question {num}</p>
            <h3 className='font-large hanken-semibold'>{question}</h3>
            <Level label={difficulty} style={difficulty.toLowerCase()} levelcss='level' />
        </>
    )
}
export default Question