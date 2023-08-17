import { useState, useEffect } from 'react';
import styles from "@/web/styles/Home.module.css"

const ThemeSwitchButton = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(window.matchMedia('(prefers-color-scheme: light)').matches);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light');
  };

  return (
    <button
      className={styles.modeLightDark}
      onClick={toggleTheme}
    >
      {isLightMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeSwitchButton;
