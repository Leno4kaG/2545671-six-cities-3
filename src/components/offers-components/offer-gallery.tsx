type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <>
      {images.map((src) => (
        <div className="offer__image-wrapper" key={src}>
          <img className="offer__image" src={src} alt="Photo studio" />
        </div>
      ))}
    </>
  );
}

export default OfferGallery;
