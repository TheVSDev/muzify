// Imports
import Link from "next/link";

import styles from "@/web/styles/Sidebar.module.css";
import HeadPage from "@/web/components/Head";

// Sidebar component
const Sidebar = () => {
  return (
    <>
      <HeadPage />
      <div className={styles.sidebarContainer}>
        <div className={styles.linksContainer}>
          <ul>
            <li className={styles.sidebarLi}>
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li className={styles.sidebarLi}>Search</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
