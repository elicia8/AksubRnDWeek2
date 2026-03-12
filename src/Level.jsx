import './App.css'
function Level({label, style}) {
    return (
        <div className={`level ${style}`}>
            <h4>{label}</h4>
        </div>
    )
}
export default Level