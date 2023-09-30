import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInAccess = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/');
	}, []);

	return <></>;
};

export default SignInAccess;
