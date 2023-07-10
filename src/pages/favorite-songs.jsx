// Imports
import HeadPage from "@/web/components/Head";
import Footer from "@/web/components/Footer";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import Title from "@/web/components/Title";

// FavoriteSongs function
export default function FavoriteSongs() {

  return (
    <>
      <HeadPage />

      <Main>
        <Sidebar />
        <Title titleLabel="Favorite songs" />
      </Main>

      <Footer />
    </>
  );
}
