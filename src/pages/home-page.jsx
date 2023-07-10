// Imports
import HeadPage from "@/web/components/Head"
import Footer from "@/web/components/Footer"
import Main from "@/web/components/Main"
import Sidebar from "@/web/components/Sidebar"

// HomePage function
export default function HomePage() {
    return (
        <>
            <HeadPage />

            <Main>
                <Sidebar />
            </Main>

            <Footer />
        </>
    )
}