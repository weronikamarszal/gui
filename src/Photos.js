import {Photo} from "./Photo";
import {useEffect, useState} from "react";
import * as _ from 'lodash';
import {Button} from 'antd';

const GroupTestState = {
    ORIGINAL: 'ORIGNAL',
    COPIES: 'COPIES'
}
const PHOTOS_NUMBER = 3
const ORIGINAL_IMAGE_NAME = '0'
const IMAGE_EXTENSION = '.jpeg'

export function Photos({groupName, groupFinish}) {
    const [testState, setTestState] = useState(GroupTestState.ORIGINAL)
    const [photos, setPhotos] = useState([]);
    const [count, setCount] = useState(0);
    const [groupScores, setGroupScores] = useState([]);

    useEffect(() => {
        setPhotos(_.shuffle(_.range(PHOTOS_NUMBER).map(i => `${i}`)));
        setGroupScores([])
        setTestState(GroupTestState.ORIGINAL)
    }, [groupName])

    return (
        <>
            <h2>{groupName}</h2>

            {
                (testState === GroupTestState.ORIGINAL) &&
                <div>
                    <h4>Oryginał:</h4>
                    <img className="test-image" src={`${groupName}/${ORIGINAL_IMAGE_NAME}${IMAGE_EXTENSION}`}/>
                    <p></p>
                    <Button onClick={() => setTestState(GroupTestState.COPIES)}>Rozpocznij</Button>
                </div>
            }
            {
                (testState === GroupTestState.COPIES) &&
                <div>
                    <Photo photo={`./${groupName}/${count}${IMAGE_EXTENSION}`}
                           nextClick={(score) => {
                               const newScore = [
                                   ...groupScores,
                                   score
                               ]
                               setGroupScores(newScore)
                               if (count < photos.length - 1) {
                                   setCount(count + 1)
                               } else {
                                   setCount(0);
                                   groupFinish(newScore)
                               }
                           }}/>
                </div>
            }
        </>
    )
}
