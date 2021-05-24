import {Photo} from "./Photo";
import {useEffect, useState} from "react";
import * as _ from 'lodash';

export function Photos({groupName, groupFinish}) {
    let photos;
    useEffect(() => {
        console.log('elo')
        photos = _.shuffle(([`${groupName}0`, `${groupName}1`, `${groupName}2`]));
    }, [])
    console.log(photos)
    const [count, setCount] = useState(0);
    console.log(photos[count])
    return (
        <>
            <div>
                {count}
                {`./${photos[count]}.jpeg`}
            </div>
            <Photo photo={`./${photos[count]}.jpeg`} nextClick={() => {
                if (count < photos.length - 1) {
                    setCount(count + 1)
                } else {
                    setCount(0);
                    groupFinish()
                }
            }}/>
        </>
    )
}
