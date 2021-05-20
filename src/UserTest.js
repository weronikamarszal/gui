import {Photos} from "./Photos";
import {useState} from "react";

export function UserTest () {
    let groupNames = ['im', 'im', 'im']
    let counter = 0;
    return (
        <div>
            <Photos groupName={groupNames[counter]}/>
        </div>
    )
}
