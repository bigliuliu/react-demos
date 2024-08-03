import './AnimalShow.css'
import { useState } from 'react'
import bird from './svgs/bird.svg'
import cat from './svgs/cat.svg'
import cow from './svgs/cow.svg'
import dog from './svgs/dog.svg'
import gator from './svgs/gator.svg'
import heart from './svgs/heart.svg'
import horse from './svgs/horse.svg'
const svgMap = {bird, cat, cow, dog,
    gator,
    heart,
    horse
}
function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0)
    const handleClick = () => {
        setClicks(clicks + 1);
    }
    return (<div className='animal-show' onClick={handleClick}>
        <img className='animal' alt='animal' src={svgMap[type]} />
        <img className='heart' alt='heart' src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>)
}
export default AnimalShow