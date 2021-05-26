import {UserTest} from './UserTest';
import {useEffect, useState} from 'react';
import {Button} from 'antd';

const TestState = {
    INIT: 'INIT',
    ACTIVE: 'ACTIVE',
    FINISH: 'FINISH'
}

export function Menu() {
    const [testState, setTestState] = useState(TestState.INIT)
    const [userName, setUserName] = useState('')
    const [allScores, setAllScores] = useState(JSON.parse(localStorage.getItem('allScores')) || {})

    useEffect(() => localStorage.setItem('allScores', JSON.stringify(allScores)), [allScores]);

    return <>
        {
            (testState === TestState.INIT) &&
            <div>
                <h3>Siema</h3>
                <div>
                    <label style={{marginRight: '2em'}}>Imię</label>
                    <input id="name"
                           onChange={event => setUserName(event.target.value)}/>
                </div>
                <p></p>
                <Button onClick={() => setTestState(TestState.ACTIVE)}>Start</Button>
            </div>
        }
        {
            (testState === TestState.ACTIVE) &&
            <UserTest finishTest={(scores) => {
                setAllScores({
                    ...allScores,
                    [userName]: [...(allScores[userName] || []), scores],
                })
                setTestState(TestState.FINISH)
            }}/>
        }
        {
            (testState === TestState.FINISH) &&
            <div>
                <h3>Dzięki</h3>
                <Button onClick={() => setTestState(TestState.ACTIVE)}>Powtórz test</Button>
                <Button onClick={() => setTestState(TestState.INIT)}>Nowa osoba</Button>
            </div>
        }
    </>
}
