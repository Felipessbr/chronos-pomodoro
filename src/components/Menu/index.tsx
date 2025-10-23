import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
  HouseIcon,
  HistoryIcon,
  SunIcon,
  SettingsIcon,
  MoonIcon,
} from "lucide-react";

type AvaiLableTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaiLableTheme>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaiLableTheme) || "dark";
    return storageTheme;
  });

  const nexThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para o Home"
        title="Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para o Configurações"
        title="Configuraçãoes"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Altera tema"
        title="Tema"
        onClick={handleThemeChange}
      >
        {nexThemeIcon[theme]}
      </a>
    </nav>
  );
}
