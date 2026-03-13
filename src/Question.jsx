import './App.css'
function Question({number, question}){
    return (
        <div>
            <p className='font-small inter-medium mb-05rem'>Question {number}</p>
            <h3 className='font-large hanken-semibold'>{question}</h3> 
        </div>
    )
}
export default Question