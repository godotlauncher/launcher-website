import type { ReactNode } from "react";

import ThemedImage from "@theme/ThemedImage";

import styles from "./styles.module.css";

export function CreateProjectAnimation(): ReactNode {
  return (
    <div className={styles.animation}>
      <ThemedImage
        className={styles.animationImage}
        alt="Creating a Godot project in Godot Launcher"
        sources={{
          light:
            "/img/animations/create-project/create-project-anim_light.gif",
          dark: "/img/animations/create-project/create-project-anim_dark.gif",
        }}
      />
    </div>
  );
}
