import React, { Component } from "react";
import style from './talk.module.css';

interface TalkProps {
    children: React.ReactNode;
    name1: string;
    name2: string;
}
const Talk = (props: TalkProps) => {
    return (<div className={style.andy_box}>
        <div className={style.props.name2}>
            {props.children}
        </div >
    </div >
}

export default Talk;
