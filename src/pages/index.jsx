// Imports
import Image from "next/image"

import HeadPage from "@/web/components/Head"
import styles from "@/web/styles/Welcome.module.css"
import Footer from "@/web/components/Footer"
import Main from "@/web/components/Main"
import Button from "@/web/components/Button"

// Welcome function
export default function Welcome() {
    return (
        <>
            <HeadPage />

            <Main>
                <Image src="/Muzify.png" alt="Muzify logo" width={200} height={58} className={styles.logo} />
                <div className={styles.container}>
                    <h1 className={styles.title}>Hello ! Welcome to <span className={styles.spanned}>MUZIFY</span></h1>
                    <p className={styles.paragraphe}>Muzify is an online music player.</p>
                    <br />
                    <Button btnLabel="Listen to some music" />
                </div>
            </Main>

            <Footer />
        </>
    )
}