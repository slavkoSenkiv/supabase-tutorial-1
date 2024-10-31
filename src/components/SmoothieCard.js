import { Link } from 'react-router-dom';

const SmoothieCart = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="button">
        <Link to={'/' + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};

export default SmoothieCart;
