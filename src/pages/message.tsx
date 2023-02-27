import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, Component, useState } from "react";
import { Inter } from '@next/font/google'
import Talk from "../components/talkelement/talk";
import Send from "../components/talkelement/Send";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] })

export default function Message() {
    const talk_list = [
        {
            name1: "andy_talk",
            name2: 'andy_box',
            content: 'こんにちは',
        },
        {
            name1: "andy_talk",
            name2: 'andy_box',
            content: 'は',
        },
        {
            name1: "andy_talk",
            name2: 'andy_box',
            content: 'kuso',
        }
    ]

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
                    {talk_list.map((talk) => (
                        <Talk
                            name1={talk.name1}
                            name2={talk.name2}
                        >{talk.content}</Talk>
                    ))}
                </div>
                <div id="text-area" >
                    <Send talk_list={talk_list}></Send>
                </div>
            </main>

        </>
    )
}
