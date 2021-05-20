import {Photo} from "./Photo";
import {useState} from "react";
import * as _ from 'lodash';

export function Photos({groupName}) {
    let photos = _.shuffle([`${groupName}0`, `${groupName}1`,`${groupName}2`])
    const [count, setCount] = useState(0);
    return (
        <Photo photo={`./${photos[count]}.jpeg`} nextClick={() => {
            if (count < photos.length - 1) {
                setCount(count + 1)
            }
        }}/>
    )
}
