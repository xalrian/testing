import './drop-component.scss'


const DropComponent = (tex, t, l) => {


const text = tex.tex;
// console.log(text)
console.log(t)


return(
    <div className="drop" style={{top:{t},left:{l}}}>
    <h2>{text}</h2>
    </div>
    )
    
}

export default DropComponent;