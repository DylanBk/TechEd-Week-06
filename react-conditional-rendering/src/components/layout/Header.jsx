import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { User } from 'lucide-react';

const Header = (props) => {
    return (
        <header className='h-20 w-full bg-gray-800 text-white flex items-center justify-between px-4'>
            <h1 className='text-3xl'>Conditional Rendering</h1>

            <nav className='flex flex-row gap-4 items-center'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>

                {props.loggedIn ? (
                    <Link to='/account'>
                        <User
                            size={24}
                            aria-label='Account Page'
                        />
                    </Link>
                ) : (
                    <Link to='/login'>Login</Link>
                )}
            </nav>
        </header>
    );
};


Header.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}


export default Header;