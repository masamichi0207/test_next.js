import Button from 'react-bootstrap/Button';
import React, { useRef, Component } from "react";
import Talk from "./talk";
interface Send {
    children?: React.ReactNode;
    class_name1?: string;
    class_name2?: string;
}
const inputEl = useRef<HTMLInputElement>(null)

const Button_send = () => {
    console.log(inputEl.current);
}
const Send = (props: Send) => {
    return (
        <>
            <select name="sample">
                <option value="sam">サム</option>
                <option value="andy">アンディ</option>
            </select>
            <input ref={inputEl} type="text" placeholder='メッセージを入力してください' style={{ width: "89%" }} value="aa" />
            <Button variant="primary" onClick={() => Button_send()}>送信</Button>
        </>
    );
}

export default Send;
