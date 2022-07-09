import type { SwitchEvent } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleChange = (ev: SwitchEvent) => {
    setTheme(ev.target.checked ? "dark" : "light");
  };

  return (
    <Switch
      css={{ marginLeft: "auto" }}
      checked={isDark}
      onChange={handleChange}
    />
  );
};

export default ThemeToggle;
