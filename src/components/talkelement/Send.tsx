import Button from 'react-bootstrap/Button';
import React, { useRef, Component } from "react";
import Talk from "./talk";
interface Send {
    children?: React.ReactNode;
    class_name1?: string;
    class_name2?: string;
}
const Send = (props: Send) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const selectEl = useRef<HTMLSelectElement>(null);
    const Button_send = () => {
        console.log(selectEl.current?.value);
        console.log(inputEl.current?.value);
        const add_area = document.getElementById("talk-room");
        // 新しいHTML要素を作成
        const new_element = React.createElement(
            Talk, { children: inputEl.current?.value, name1: 'andy_talk', name2: "andy_box" },
        );
        // new_element.setAttribute("name1", "andy_talk");
        // new_element.setAttribute("name2", "andy_box");
        // new_element.innerHTML = inputEl.current?.value;
        add_area?.appendChild(new_element);

    }
    return (
        <>
            <select name="sample" ref={selectEl}>
                <option value="sam">サム</option>
                <option value="andy">アンディ</option>
            </select>
            <input ref={inputEl} type="text" placeholder='メッセージを入力してください' style={{ width: "89%" }} />
            <Button variant="primary" onClick={() => Button_send()}>送信</Button>
        </>
    );
}

export default Send;
