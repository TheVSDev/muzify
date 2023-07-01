// Imports
import HeadPage from "@/web/components/Head"
import Footer from "@/web/components/Footer"
import Main from "@/web/components/Main"

// Welcome function
export default function HomePage() {
    return (
        <>
            <HeadPage />

            <Main>
                <h1 className="cuckoo">Cuckoo</h1>
            </Main>

            <Footer />
        </>
    )
}