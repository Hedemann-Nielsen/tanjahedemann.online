import { useEffect, useRef } from "react";

function VideoModal({ item, content, onClose }) {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    dialog.showModal();
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  function closeModal() {
    videoRef.current?.pause();
    dialogRef.current?.close();
  }

  function handleClose() {
    onClose();
  }

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="video-modal"
      aria-labelledby={`video-title-${item.id}`}
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="video-modal__content">
        <button
          className="video-modal__close"
          type="button"
          aria-label="Close video"
          onClick={closeModal}
        >
          ×
        </button>

        <video
          ref={videoRef}
          className="video-modal__video"
          controls
          autoPlay
          playsInline
          poster={item.poster}
        >
          <source src={item.video} type="video/mp4" />
        </video>

        <div className="video-modal__text">
          <p>{content.brand}</p>

          <h3 id={`video-title-${item.id}`}>
            {content.title}
          </h3>

          <span>{content.category}</span>
        </div>
      </div>
    </dialog>
  );
}

export default VideoModal;