import Footer from "@/shared/components/Footer";
import Nav from "@/shared/components/Navbar";
import { useTheme } from "@material-tailwind/react";

export default function Home() {
  const theme = useTheme();
  console.log(theme);
  return <Footer />;
}
