import React, {useState} from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({onClick} : Props) => {
    const [activated, setActivity] = useState(false);
    const handleClick = () => {
        activated ? setActivity(false) : setActivity(true);
        onClick();
    }

    if (activated) {
        return <AiFillHeart color="#ff6b81" size="100" onClick={handleClick}/>
    } 

    return (
        <AiOutlineHeart size="100" onClick={handleClick} />
    );
}

export default Like;