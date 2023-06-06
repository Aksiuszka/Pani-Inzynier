import { FC } from 'react';
import { ButtonProps } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

const CustomButton: FC<ButtonProps> = ({ children, color, variant, onClick }) => {
	return (
		<Button color={color} variant={variant} onClick={onClick} className='w-auto rounded-full'>
			{children}
		</Button>
	);
};

export default CustomButton;
