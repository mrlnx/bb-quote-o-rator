import { FC, useEffect, useState } from "react";
import { IconFallback, IconWrapper } from "./Icon.styled";

export const Icon: FC<{ name: string }> = ({ name, ...props }) => {
  const [importedIcon, setImportedIcon] = useState<string>();

  useEffect(() => {
    const getIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `../../assets/icons/${name}.svg`
        );
        setImportedIcon(namedImport);
      } catch (e) {
        console.error(`Error while importing icon "${name}"`, e);
      }
    };

    getIcon();
  }, [name]);

  return importedIcon ? (
    <IconWrapper image={importedIcon} data-testid={name} {...props} />
  ) : (
    <IconFallback />
  );
};
