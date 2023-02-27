import Button from 'react-bootstrap/Button';
import React, { useRef, Component, useState } from "react";
import ReactDOM from 'react-dom';
import Talk from "./talk";
interface Send {
    talk_list: object;
}
const Send = (props: Send) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const selectEl = useRef<HTMLSelectElement>(null);
    const Button_send = () => {
        const list = [{ name1: "andy_talk", name2: "'andy_box'", content: "やほ" }];
        const result = props.talk_list.concat(list);
        const aho = Object.assign(props.talk_list, list);
        // const newTodo = props.talk_list
        console.log(selectEl.current?.value);
        console.log(inputEl.current?.value);
        console.log(aho);
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
