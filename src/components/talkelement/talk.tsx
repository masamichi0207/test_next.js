import React, { Component } from "react";
import styl from './talk.module.css';
interface Talk {
    children: React.ReactNode;
}
// class Talk extends Component {
//     render() {
//         return <div className={style["box-left"]}>
//             <div className={style['message-box']}>
//                 {props.children}
//             </div>
//         </div >;
//     }
// }
const Talk = (props: Talk) => {
    return <div className={styl.boxleft
    }>
        <div className={styl.messagebox}>
            {props.children}
        </div >
    </div >
}

export default Talk;
