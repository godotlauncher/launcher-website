import { FC, ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { Check, Copy } from "lucide-react";

import styles from "./styles.module.css";

interface WingetCommand {
  label: string;
  command: string;
}

interface WingetCommandListProps {
  commands: WingetCommand[];
  intro?: ReactNode;
  hint?: ReactNode;
  className?: string;
}

export const WingetCommandList: FC<WingetCommandListProps> = ({
  commands,
  intro,
  hint,
  className,
}) => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  useEffect(() => {
    if (!copiedCommand) {
      return;
    }
    const timeout = setTimeout(() => setCopiedCommand(null), 3000);
    return () => clearTimeout(timeout);
  }, [copiedCommand]);

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
  };

  return (
    <div className={clsx(styles.card, className)}>
      {intro && <p className={styles.intro}>{intro}</p>}

      <div className={styles.codeGroup}>
        {commands.map(({ label, command }) => (
          <div key={command} className={styles.codeBlock}>
            <div className={styles.codeLabel}>{label}</div>
            <div className={styles.codeText}>&gt; {command}</div>
            <button
              className={styles.copyButton}
              title={`Copy ${command}`}
              onClick={() => handleCopy(command)}
            >
              {copiedCommand === command ? (
                <Check width={16} color="#4caf50" />
              ) : (
                <Copy width={16} />
              )}
            </button>
          </div>
        ))}
      </div>

      {hint && <div className={styles.hint}>{hint}</div>}
    </div>
  );
};

