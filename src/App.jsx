import reactLogo from './assets/react.svg'
import './App.css'
import Level from './Level'
import Question from './Question'

function App() {
  return (
    <div className='b-color-1616'>
      <div>
        <p>From Beginner to Advanced Questions</p>
        <div className='title'>
          <img src={reactLogo} alt="React logo" />
          <h1>The React Flash Cards</h1>
        </div>
        <p>Test your react knowledge by answering the flashcards below</p>
      </div>
      <div className='cards'>
        <Question number='1' question='What does a useEffect dependency array do?'/>
        <Level label="Easy" style="easy"/>
        <Level label="Medium" style="medium"/>
        <Level label="Hard" style="hard"/>
      </div>
    </div>
  )
}

export default App
