import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useAgent } from "../../hooks/useAgent";

export const ProjectViewScreenShot: React.FC = () => {
  const { os } = useAgent();

  const getOsKey = (): string => {
    switch (os) {
      case "Windows":
        return "windows";
      case "macOS":
        return "mac";
      case "Linux":
        return "linux";
      default:
        return "mac";
    }
  };

  return (
    <div className={styles.projectView}>
      <div
        role="img"
        aria-label="Screenshot of Godot Launcher"
        className={clsx(
          styles.projectView__image,
          styles[`projectView__image-${getOsKey()}`]
        )}
      ></div>
    </div>
  );
};
