import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

export const ProjectViewScreenShot: React.FC = () => {
  const { colorMode } = useColorMode();
  const screenshot = colorMode === "dark"
    ? "/img/screenshots/screen_projects_view_dark.webp"
    : "/img/screenshots/screen_projects_view_light.webp";


  return (
    <div className={styles.projectView}>
      <img
        className={styles.projectView__image}
        src={screenshot}
        alt="Screenshot of Godot Launcher"
      />
    </div>
  );
};
