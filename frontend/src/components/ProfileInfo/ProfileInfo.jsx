import { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

function ProfileInfo({ data, onSort }) {

  const [infoFromSever, setInfoFromServer] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/user/getInfo', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setInfoFromServer(data))
  }, [])


  return (
    <div>
      <div>
        <form action="">
          <UploadPhoto />
          <span>Имя : {infoFromSever.nickname}</span>
          <span>Email: {infoFromSever.email}</span>
          <span>Дата регистрации : 01.01.2000г.</span>
          <span>Какую группу закончил : Бобры</span>
          <span>Написал отзывов : 10</span>
          <span>Рейтинг : {infoFromSever.rating}</span>
          <button>Редактировать профиль</button>
        </form>
      </div>
      <div>
        <Sort onSort={onSort} />
        Мои последние отзывы :
        {data.map((review) => {
          return <Reviews key={review.author} review={review} />;
        })}
      </div>
    </div>
  );
}

export default ProfileInfo;
