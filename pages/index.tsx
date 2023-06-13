import Layout from "@/shared/components/Layout";
import { useTheme } from "@material-tailwind/react";

export default function Home() {
  const theme = useTheme();
  console.log(theme);
  return <Layout>xyz</Layout>;
}
