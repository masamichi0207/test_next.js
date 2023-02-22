import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import '../styles/message.css';
// import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const inter = Inter({ subsets: ['latin'] })

export default function Message() {
    const externalWebsites = [
        {
            name: "Github",
            url: "https://github.com/masamichi0207",
            logo: "/git.png",
            imageAlt: "Github logo",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/masamichi7227/",
            logo: "/insta.png",
            imageAlt: "insta logo",
        },
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
                    height: "100 %",
                    overflow: "scroll"
                }}>
                    <img
                        src={"/talk_back.png"}
                        id={"back"}
                        width="100%"
                        height="780px"
                    />
                </div>
                <div id="text-area" style={{ textAlign: 'center' }}>
                    <select name="sample">
                        <option value="sample">サム</option>
                        <option value="sample">アンディ</option>
                    </select>
                    <input type="text" placeholder='メッセージを入力してください' style={{ width: "89%" }} />

                    <Button variant="primary">送信</Button>
                </div>
                <div >
                </div>
            </main>

        </>
    )
}
