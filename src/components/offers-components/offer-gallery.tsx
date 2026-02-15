type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      {images.map((src) => (<img className="offer__image" key={src} src={src} alt="Photo studio" />))}
    </div>
  );
}

export default OfferGallery;
