import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BasicTemplate from "../components/Templates/BasicTemplate"
import ExternalSiteCard from "../common/ExternalSiteCard";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <BasicTemplate>
        <main className={styles.main}>

          <div >
            <div>高木政道(Takagi,masamichi)</div>
            <div>2002年生まれ</div>
            <div>三重県出身</div>
            <div>長岡技術科学大学　情報・経営システム工学課程　3年</div>
          </div>
          <div >
            <Image
              src="/masa.JPG"
              alt="Next.js Logo"
              width={400}
              height={200}
              priority
            />
          </div>
          <div>
            <h2>外部サイト</h2>
            <div >
              {externalWebsites.map((Website) => (
                <ExternalSiteCard
                  key={Website.name}
                  siteName={Website.name}
                  siteUrl={Website.url}
                  siteIcon={Website.logo}
                  siteIconDescription={Website.imageAlt}
                />
              ))}
            </div>

          </div>
        </main>
      </BasicTemplate>

    </>
  )
}
