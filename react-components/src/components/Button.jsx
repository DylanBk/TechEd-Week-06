import PropTypes from 'prop-types';


const Button = ({ className, label, onClick }) => {
    console.log(className, label, onClick)

    return (
        <button className={className} onClick={onClick} >{label}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};


export default Button;