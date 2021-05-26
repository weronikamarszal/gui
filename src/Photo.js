import {Button, Select} from "antd";
import {useEffect, useState} from 'react';
import * as _ from 'lodash';

const {Option} = Select;

const VALIDATION_MESSAGE = 'Podaj wartość'
const POSSIBLE_SCORES = _.range(1, 6)

export function Photo({photo, nextClick}) {
    const [photoScore, setPhotoScore] = useState(null);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        setPhotoScore(null)
    }, [photo]);

    return (
        <>
            <Select value={photoScore}
                    onChange={value => setPhotoScore(Number(value))}
                    style={{width: 120}}>
                {POSSIBLE_SCORES.map(i => <Option value={i} key={i}>{i}</Option>)}
            </Select>
            <div style={{color: 'red'}}>{validationError}</div>
            <p></p>
            <div>
                <img className="test-image"
                     src={photo}/>
            </div>
            <p></p>
            <Button onClick={() => {
                if (photoScore === null) {
                    setValidationError(VALIDATION_MESSAGE)
                    return
                }
                setValidationError('')
                nextClick(photoScore)
            }}>Następny</Button>
        </>
    )
}
