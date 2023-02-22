import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BasicTemplate from "../components/Templates/BasicTemplate"
const inter = Inter({ subsets: ['latin'] })

export default function skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicTemplate>
        <main className={styles.main}>
          ここにはスキルを書く
          <ul>
            {skills.map((skill) => (
              // 最初のタグにはkeyを入れる
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </main>
      </BasicTemplate>
    </>
  )
}
