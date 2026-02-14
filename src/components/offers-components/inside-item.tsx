type InsideProps = {
  goods: string[];
}

function InsideItem({ goods }: InsideProps) {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => (<li className="offer__inside-item" key={good}>{good}</li>))}
    </ul>
  );
}

export default InsideItem;
