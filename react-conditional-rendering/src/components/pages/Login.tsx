import PropTypes from 'prop-types';
import Header from '../layout/Header';
import { useEffect } from 'react';
import { useAsyncValue, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const nav = useNavigate();

    useEffect(() => {
        if (props.loggedIn) {
            nav('/');
        };
    }, []);

    const handleLogin = () => {
        props.onLogin();

        nav('/account');
    };

    return (
        <>
            <Header loggedIn={props.loggedIn} />

            <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-900/50 transition-colors duration-300 cursor-pointer"
                onClick={handleLogin}>
                Login
            </button>
        </>
    );
};

Login.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default Login;