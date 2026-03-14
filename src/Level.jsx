import './App.css'
function Level({label, style, levelcss}) {
    return (
        <div className={`${levelcss} ${style} hanken-semibold`}>
            <h4>{label}</h4>
        </div>
    )
}
export default Level