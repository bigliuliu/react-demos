import { GoBell, GoDownload,GoDatabase} from "react-icons/go";
import Button from "../components/Button"
function ButtonPage(){
    const handleClick = ()=>{
        console.log("click-------------")
    }
    return (
        <div>
            <div><Button success rounded outline primary onClick={handleClick} className="mb-2"><GoBell /> Click me</Button></div>
            <div><Button danger outline onMouseLeave= {handleClick}> <GoDownload/>buy</Button></div>
            <div><Button warning onMouseEnter= {handleClick}><GoDatabase/>se</Button></div>
            <div><Button secondary outline>22</Button></div>
            <div><Button primary rounded>2222</Button></div>
        </div>
    )
}
export default ButtonPage