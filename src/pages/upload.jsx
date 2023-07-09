// Imports
import HeadPage from "@/web/components/Head";
import Footer from "@/web/components/Footer";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import styles from "@/web/styles/Upload.module.css"

// Welcome function
export default function Upload() {
  return (
    <>
      <HeadPage />

      <Main>
        <Sidebar />
        <div className={styles.container}>
            <input type="file" accept="audio/*" name="upload_music" id="file" className={styles.upload} />
            <label for="file" className={styles.label}>Upload music</label>
        </div>
      </Main>

      <Footer />
    </>
  );
}
