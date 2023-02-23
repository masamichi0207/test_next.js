import React, { Component } from "react";
import styles from './talk.module.css';

class Talk extends Component {
    render() {
        return <div className={styles["box-left"]}>
            <div className={styles['message-box']}>
            </div>
        </div >;
    }
}

export default Talk;
