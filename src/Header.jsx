import './App.css'
import reactLogo from './assets/images/react.svg'
function Header() {
    return (
        <header>
            <p className='subtitle font-medium hanken-medium'>From Beginner to Advanced Questions</p>
            <div className='title'>
                <img src={reactLogo} alt="React logo" />
                <h1 className='hanken-semibold font-title'>The React Flash Cards.</h1>
            </div>
            <p className='font-medium hanken-medium'>Test your react knowledge by answering the flashcards below</p>
        </header>
    )
}
export default Header