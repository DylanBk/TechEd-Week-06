import { ArrowUp, Plus } from 'lucide-react';

type Props = {
    handleClick: () => void
};

const Menu = (props: Props) => {
    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className='h-28 sm:h-16 w-16 sm:w-28 fixed right-4 bottom-4 z-10 flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-evenly p-2 rounded-full bg-white shadow'>
            <button onClick={handleToTop}>
                <ArrowUp
                    className='icon'
                    size={32}
                />
            </button>

            <button onClick={props.handleClick}>
                <Plus
                    className='icon'
                    size={32}
                />
            </button>
        </section>
    );
};

export default Menu;