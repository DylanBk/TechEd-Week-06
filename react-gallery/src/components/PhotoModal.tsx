import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

type Props = {
    data: {
        src: string
    },
    handleClick: (e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>) => void,
};

const PhotoModal = (props: Props) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        imageRef.current!.focus();

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                console.log('clicked')
                props.handleClick();
            };
        };

        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown)
    }, []);

    return (
        <div className='max-h-3/4 w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center p-8 rounded-lg bg-white shadow'>
            <img
                ref={imageRef}
                className='h-3/4 w-auto'
                src={props.data.src}
                alt='A photo from Picsum'
                tabIndex={0}
            />

            <p className='text-center'>
                Source:&nbsp;
                <a
                    className='underline break-all'
                    href={props.data.src}
                    target='_blank'>
                    {props.data.src}
                </a>
            </p>

            <button
                className='h-8 w-8 absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 p-2 rounded-lg bg-red-500 hover:bg-red-600'
                onClick={props.handleClick}
                aria-label='Close modal'>
                <X
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full stroke-white hover:stroke-gray-200'
                    aria-hidden='true'
                />
            </button>
        </div>
    );
};

export default PhotoModal;