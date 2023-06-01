import { useRef } from 'react';

export default function Home() {
  const dRef = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    if (dRef.current) {
      dRef.current.showModal();
    }
  };

  return (
    <div className="Home">
      <h1>Hello World!</h1>
      <dialog id="d" className="dialog" ref={dRef}>
        test
        <button type="button" onClick={() => dRef.current?.close()}>
          close
        </button>
      </dialog>

      <button type="button" onClick={handleOpenDialog} className="button">
        open
      </button>
    </div>
  );
}
