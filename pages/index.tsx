import { useTheme } from "@material-tailwind/react";

export default function Home() {
  const theme = useTheme();
  console.log(theme);
  return (
    <div style={{ backgroundColor: `${theme.palette.primary.light}` }}>
      qwerty
    </div>
  );
}
