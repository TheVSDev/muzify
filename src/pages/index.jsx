// Imports
import HeadPage from "@/web/components/Head"

import styles from "@/web/styles/Welcome.module.css"

// Welcome function
export default function Welcome() {
    return (
        <>
            <HeadPage />

            <h1 className={styles.title}>Hello ! Welcome to MUZIFY</h1>
            <p className={styles.paragraphe}>Muzify is an online music player.</p>
        </>
    )
}