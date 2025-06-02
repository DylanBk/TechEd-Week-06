import PropTypes from 'prop-types';
import { useState } from 'react';

import heartDef from '../assets/media/icons/heart-default.svg';
import heartActive from '../assets/media/icons/heart-active.svg';
import shareDef from '../assets/media/icons/share-default.svg';
import shareActive from '../assets/media/icons/share-active.svg';
import saveDef from '../assets/media/icons/save-default.svg';
import saveActive from '../assets/media/icons/save-active.svg';

const Post = (props) => {
    const [liked, setLiked] = useState(false);
    const [shared, setShared] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
        <section
            className='post'>
            <div>
                <p id='author'>{props.author}</p>

                <div>
                    {props.edited && (
                        <p id='edited'>(Edited)</p>
                    )}

                    <p id='date'>{props.created_at}</p>
                </div>
            </div>
            <p>{props.content}</p>

            <div id="interactions">
                <button
                    className='interaction'
                    onClick={() => setLiked(!liked)}>
                    <img
                        src={liked ? heartActive : heartDef}
                        alt="Like" />
                </button>

                <button
                    className='interaction'
                    onClick={() => setShared(!shared)}>
                    <img
                        src={shared ? shareActive : shareDef}
                        alt="Share" />
                </button>

                <button
                    className='interaction'
                    onClick={() => setSaved(!saved)}>
                    <img
                        src={saved ? saveActive : saveDef}
                        alt="Save" />
                </button>
            </div>
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