type Inside = {
  services: string[];
}

function InsideAmenitiesItem({ services }: Inside) {
  return (
    <ul className="offer__inside-list">
      {services.map((service) => (<li className="offer__inside-item" key={service}>{service}</li>))}
    </ul>
  );
}

export default InsideAmenitiesItem;
