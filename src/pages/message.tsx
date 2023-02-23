import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { Inter } from '@next/font/google'
import Talk from "../components/talkelement/talk";

// import '../styles/message.css';
// import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const inter = Inter({ subsets: ['latin'] })

export default function Message() {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <div id="talk-room" style={{
                    width: "100%",
                    height: "780px",
                    overflow: "scroll",
                    background: "url(/talk.png)"
                }}>
                    <div className="box-left"
                        style={{
                            display: "flex",
                            justifyContent: 'flex-start',
                        }}>
                        <div className='message-box' style={{
                            padding: "25px",
                            maxWidth: "40%",
                            margin: "10px",
                            borderRadius: "30px",
                            backgroundColor: 'white'
                        }}>こんにちは
                        </div>
                    </div>
                    <Talk　>こんにちは</Talk>
                    <div className="box-right" style={{
                        display: "flex",
                        justifyContent: 'flex-end',
                    }}>
                        <div className='message-box' style={{
                            padding: "25px",
                            maxWidth: "40%",
                            margin: "10px",
                            borderRadius: "30px",
                            backgroundColor: 'yellowgreen'
                        }}>
                            こんにちは
                        </div>
                    </div>


                </div>
                <div id="text-area" >
                    <select name="sample">
                        <option value="sam">サム</option>
                        <option value="andy">アンディ</option>
                    </select>
                    <input type="text" placeholder='メッセージを入力してください' style={{ width: "89%" }} />
                    <Button variant="primary">送信</Button>
                </div>
            </main>

        </>
    )
}
