import {Photos} from "./Photos";
import {useState} from "react";

const GROUP_NAMES = ['bocian', 'cebula', 'las']

export function UserTest({finishTest}) {
    const [count, setCount] = useState(0);
    const [userScores, setUserScores] = useState({});

    const activeGroup = GROUP_NAMES[count];

    return (
        <div>
            <Photos groupName={activeGroup}
                    groupFinish={(groupScore) => {
                        const newScore = {
                            ...userScores,
                            [activeGroup]: groupScore
                        }
                        setUserScores(newScore)
                        if (count < GROUP_NAMES.length - 1) {
                            setCount(count + 1)
                        } else {
                            setCount(0)
                            finishTest(newScore)
                        }
                    }
                    }/>
        </div>
    )
}
