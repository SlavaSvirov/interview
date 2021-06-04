import { Link } from "react-router-dom";


function PrivateHeader () {




  return (
    <div>
      <ul>
      <Link to='/profile'>
        <li> Личная информация</li>
        </Link>

      
        <Link to='/profile/addReview'>
        <li> Добавить отзыв</li>
    </Link>
      </ul>
    </div>
  )
}





export default PrivateHeader
