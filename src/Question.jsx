import './App.css'
function Question({number, question}){
    return (
        <div>
            <p className='font-small'>Question {number}</p>
            <h3 className='font-large'>{question}</h3> 
        </div>
    )
}
export default Question