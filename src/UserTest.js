import {Photos} from "./Photos";
import {useState} from "react";

export function UserTest() {
    let groupNames = ['im', 'im', 'im']
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <Photos groupName={groupNames[count]} groupFinish={() => {
                if (count < groupNames.length - 1) {
                    setCount(count + 1)
                }
            }
            }/>
        </div>
    )
}
