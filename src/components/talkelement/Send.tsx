import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import Talk from "./talk";
interface Send {
    children?: React.ReactNode;
    class_name1?: string;
    class_name2?: string;
}
const Button_send = () => {

}
const Send = (props: Send) => {
    return <Button variant="primary" onClick={() => Button_send()}>送信</Button>
}

export default Send;
