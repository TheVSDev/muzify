// Imports
import HeadPage from "@/web/components/Head"
import Footer from "@/web/components/Footer"
import Main from "@/web/components/Main"
import Sidebar from "@/web/components/Sidebar"
import SearchBar from "@/web/components/SearchBar"

// Search function
export default function Search() {
    return (
        <>
            <HeadPage />

            <Main>
                <Sidebar />
                <SearchBar />
            </Main>

            <Footer />
        </>
    )
}