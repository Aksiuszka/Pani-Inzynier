import Footer from '@/shared/components/Footer';
import Nav from '@/shared/components/Navbar';
import { useTheme } from '@material-tailwind/react';
import { Canvas } from '@react-three/fiber';

export default function Home() {
	const theme = useTheme();
	console.log(theme);
	return <Footer />;
}
