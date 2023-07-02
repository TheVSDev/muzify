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
              <li className={styles.sidebarLi}>
                <Link className="" href="/">
                  Home
                </Link>
              </li>
              <li className={styles.sidebarLi}>
                <Link className="" href="/">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Sidebar;
