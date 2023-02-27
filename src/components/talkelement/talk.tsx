import React, { Component } from "react";
import style from './talk.module.css';

interface TalkProps {
    name1: string;
    name2: string;
    children: React.ReactNode;
}
const Talk = (props: TalkProps) => {
    return (<div className={style[props.name1]}>
        <div className={style[props.name2]}>
            {props.children}
        </div >
    </div >
    );
}

export default Talk;
