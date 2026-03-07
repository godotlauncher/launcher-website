import React from "react";
import ThemedImage from "@theme/ThemedImage";
import styles from "./styles.module.css";

export const ProjectViewScreenShot: React.FC = () => {
  return (
    <div className={styles.projectView}>
      <ThemedImage
        className={styles.projectView__image}
        alt="Screenshot of Godot Launcher"
        sources={{
          light: "/img/screenshots/screen_projects_view_light.webp",
          dark: "/img/screenshots/screen_projects_view_dark.webp",
        }}
      />
    </div>
  );
};
