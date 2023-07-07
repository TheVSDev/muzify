// Imports
import Link from "next/link";
import Image from "next/image";

import styles from "@/web/styles/Sidebar.module.css";
import HeadPage from "@/web/components/Head";
import Main from "./Main";

// Sidebar component
const Sidebar = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <div className={styles.sidebarContainer}>
          <Image
            src="/Muzify.png"
            alt="Muzify logo"
            width={200}
            height={58}
            className={styles.logo}
          />
          <div className={styles.linksContainer}>
            <ul>
              <Link className="" href="/home-page">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/home.svg"
                    alt="Home icon"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Home
                </li>
              </Link>
              <Link className="" href="/search">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/search.svg"
                    alt="Search icon"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Search
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <ul>
                <li className={styles.sidebarLi}>
                  <Image
                    src="/upload.svg"
                    alt="Home icon"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  {/* <label for="upload_music">Upload music</label>
                  <input type="file" accept="audio/*" name="upload_music" id="upload_music" /> */}
                  Upload music
                </li>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Sidebar;
