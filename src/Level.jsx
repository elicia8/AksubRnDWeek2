import './App.css'
function Level({label, style}) {
    return (
        <div className={`level ${style} font-medium hanken-semibold`}>
            <h4>{label}</h4>
        </div>
    )
}
export default Level