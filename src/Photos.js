import {Photo} from "./Photo";
import {useState} from "react";

export function Photos() {
    let photos = ['im1.jpeg', 'im2.jpeg', 'im3.jpeg']
    const [count, setCount] = useState(0);
    return (
        <Photo photo={`./${photos[count]}`} nextClick={() => {
            if (count < photos.length - 1) {
                setCount(count + 1)
            }
        }}/>
    )
}
