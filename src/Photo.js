import {Button, Image, Select, Space} from "antd";
import Title from "antd/es/typography/Title";

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export function Photo({photo, nextClick}) {
    return (
        <>
            <Title>Oceń </Title>

            <Select style={{width: 120}} onChange={handleChange}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
            </Select>
            <p></p>
            <div>
                <img src={photo}/>
            </div>
            <Button onClick={() => nextClick()}>Następny</Button>
        </>
    )
}
