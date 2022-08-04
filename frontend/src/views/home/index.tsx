import React, {useEffect} from "react";
import {Button} from "antd";

const home: React.FC<{}> = () => {
    useEffect(() => console.log('/home'), []);

    return (
        <div>
            <span>this is home page</span>
            <Button type="primary">click</Button>
        </div>
    )
}

export default home;
