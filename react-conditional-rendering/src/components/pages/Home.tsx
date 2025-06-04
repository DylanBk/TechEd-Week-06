import PropTypes from 'prop-types';
import Header from '../layout/Header';

const Home = (props) => {
    return (
        <>
            <Header loggedIn={props.loggedIn} />

            <div className="mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Home</h1>
                <p className="text-gray-400">Welcome to the home page!</p>
            </div>
        </>
    );
};

Home.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}

export default Home;