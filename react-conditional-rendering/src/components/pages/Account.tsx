import PropTypes from 'prop-types';
import Header from "../layout/Header"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = (props) => {
    const nav = useNavigate();

    useEffect(() => {
        if (!props.loggedIn) {
            nav('/');
        };
    }, []);

    const handleLogout = () => {
        props.onLogout();

        nav('/login');
    };

    return (
        <>
            <Header loggedIn={props.loggedIn} />

            <div className="mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Account</h1>
                <p className="text-gray-400">This is the account page.</p>
            </div>

            <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-red-800 text-white hover:bg-red-900/50 transition-colors duration-300 cursor-pointer"
                onClick={handleLogout}>
                Logout
            </button>
        </>
    );
};

Account.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired
};

export default Account;