import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// loads every image in src/assets/art
const COUNT = 4;

const images = [];
for (let i = 1; i <= COUNT; i++) {
  const n = String(i).padStart(2, '0');
  images.push(require(`../assets/Art/${n}.png`));
}

export const Artist = () => {
  const [selected, setSelected] = useState(null);

  return (
    
    <div className="art-page">
      Artwork I've made
      <div className="art-grid">
        {images.map((src, i) => (
          <button
            key={src}
            className="art-thumb"
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`Artwork ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      <Modal
        show={selected !== null}
        onHide={() => setSelected(null)}
        size="xl"
        dialogClassName="art-modal"
      >
        <img
          className="art-full"
          src={selected}
          alt="Full artwork"
          onClick={() => setSelected(null)}
        />
      </Modal>
    </div>
  );
};