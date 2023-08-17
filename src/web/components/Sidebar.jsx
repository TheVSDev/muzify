// Imports
import Link from "next/link";
import Image from "next/image";

import styles from "@/web/styles/Sidebar.module.css";
import HeadPage from "@/web/components/Head";
import Main from "./Main";
import ThemeSwitchButton from "./ThemeSwitchButton";

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
          <ThemeSwitchButton />
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
              <Link href="/upload">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/upload.svg"
                    alt="Home icon"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Upload music
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <ul>
              <Link href="/playlists">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/playlist.svg"
                    alt="Playlist"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Playlists
                </li>
              </Link>
              <Link href="/liked-songs">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/liked.svg"
                    alt="Liked"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Liked songs
                </li>
              </Link>
              <Link href="/favorite-songs">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/favorite.svg"
                    alt="Favorite"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Favorite songs
                </li>
              </Link>
              <Link href="/saved-songs">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/saved.svg"
                    alt="Saved"
                    width={25}
                    height={58}
                    className={styles.icon}
                  />
                  Saved songs
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Sidebar;
