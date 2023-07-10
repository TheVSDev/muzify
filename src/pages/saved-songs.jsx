// Imports
import HeadPage from "@/web/components/Head";
import Footer from "@/web/components/Footer";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import Title from "@/web/components/Title";

// SavedSongs function
export default function SavedSongs() {

  return (
    <>
      <HeadPage />

      <Main>
        <Sidebar />
        <Title titleLabel="Saved songs" />
      </Main>

      <Footer />
    </>
  );
}
