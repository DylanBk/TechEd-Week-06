type Props = {
    index: number;
    src: string;
    loaded: boolean;
    handleLoad: () => void;
    handleClick: (e: React.MouseEvent<HTMLImageElement> | React.KeyboardEvent<HTMLImageElement>) => void;
};

const Photo = (props: Props) => {
    return (
    <div className='relative aspect-square w-[calc(33.3333%-0.5rem)] sm:w-[calc(25%-0.5rem)] md:w-[calc(20%-0.5rem)] rounded-sm'>
        {!props.loaded && (
            <div className='absolute inset-0 rounded-sm bg-gray-300 animate-pulse' />
        )}

            {props.src && (
            <img
                className={`h-full w-full object-cover rounded-sm ${props.loaded ? 'opacity-100' : 'opacity-0'} hover:scale-105 focus:scale-105 transition-transform cursor-pointer`}
                src={props.src}
                alt='A photo from picsum'
                onClick={props.handleClick}
                onKeyDown={(e) => e.key === 'Enter' && props.handleClick(e)}
                onLoad={props.handleLoad}
                tabIndex={0}
            />
        )}
    </div>
    );
};

export default Photo;
