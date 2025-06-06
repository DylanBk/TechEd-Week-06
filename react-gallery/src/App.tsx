import { useEffect, useState } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Photo from './components/Photo';
import PhotoModal from './components/PhotoModal';

let page: number = 1;
const photoLimit: number = 15;

const App = () => {
  const [photos, setPhotos] = useState<{ src: string; loaded: boolean }[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{ src: string }>({ src: '' });

  const getPhotos = async () => {
    const placeholders = Array.from({ length: photoLimit }, () => ({
      src: '',
      loaded: false
    }));
  
    setPhotos((prev) => [...prev, ...placeholders]);

    const req = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${photoLimit}`);
    const res = await req.json();

    const lenPhotos: number = photos.length;

    setPhotos((prev) =>
      prev.map((p, i) =>
        i >= lenPhotos && i < lenPhotos + photoLimit ? {
              src: `https://picsum.photos/id/${res[i - lenPhotos].id}/300`,
              loaded: false
            } : p
      )
    );

    page += 1;
  };
  

  useEffect(() => {
    getPhotos();
  }, []);

  const handlePhotoLoad = (index: number) => {
    setPhotos((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, loaded: true } : p
      )
    );
  };

  const handleModalToggle = (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (e.currentTarget instanceof HTMLImageElement) {
      setModalData({ src: e.currentTarget.src });
    }
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Header />
      <Menu handleClick={getPhotos} />

      <main className='h-full w-full sm:w-[90%] lg:w-[80%] flex flex-row flex-wrap gap-2 p-4 mx-auto mt-20'>
        {photos.map((p, i) => (
          <Photo
            key={i}
            index={i}
            src={p.src}
            loaded={p.loaded}
            handleLoad={() => handlePhotoLoad(i)}
            handleClick={handleModalToggle}
          />
        ))}

        {isModalVisible && (
          <div className='h-screen w-screen fixed inset-0 z-10'>
            <div className='h-screen w-screen fixed inset-0 z-10 bg-black/40'></div>
            <PhotoModal data={modalData} handleClick={handleModalToggle} />
          </div>
        )}
      </main>
    </>
  );
};

export default App;