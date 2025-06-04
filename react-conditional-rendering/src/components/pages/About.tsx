import PropTypes from 'prop-types';
import Header from '../layout/Header';

const About = (props) => {
    return (
        <>
            <Header loggedIn={props.loggedIn} />

            <div className="mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">About</h1>
                <p className="text-gray-400">Welcome to the about page!</p>
            </div>
        </>
    );
};

About.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}

export default About;