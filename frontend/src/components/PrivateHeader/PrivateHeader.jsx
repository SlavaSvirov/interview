import { Link } from 'react-router-dom';
import './PrivateHeader.css';
function PrivateHeader() {
  return (
    <div className="review">
      <ul>
        <Link to="/profile">
          <li> Личная информация</li>
        </Link>

        <Link to="/review/addReview">
          <li> Добавить отзыв</li>
        </Link>
      </ul>
    </div>
  );
}

export default PrivateHeader;
