import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <section
            className='post'>
            <div>
                <p id='author'>{props.author}</p>

                <div>
                    {props.edited && (
                        <p id='edited'>(Edited)</p>
                    )}

                    <p>{props.created_at}</p>
                </div>
            </div>
            <p>{props.content}</p>
        </section>
    );
};

Post.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    edited: PropTypes.bool
};

export default Post;