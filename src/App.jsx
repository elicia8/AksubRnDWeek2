import reactLogo from './assets/images/react.svg'
import './App.css'
import Level from './Level'
import Question from './Question'

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <p className='subtitle font-medium hanken-medium'>From Beginner to Advanced Questions</p>
        <div className='title'>
          <img src={reactLogo} alt="React logo" />
          <h1 className='hanken-semibold font-title'>The React Flash Cards.</h1>
        </div>
        <p className='font-medium hanken-medium'>Test your react knowledge by answering the flashcards below</p>
      </div>
      <div className="cards-container">
        <div className='cards'>
          <Question number='1' question='What does a useEffect dependency array do?' />
          <Level label="Easy" style="easy" />
        </div>
      </div>
    </div>
  )
}

export default App
