
import Reviews from '../Reviews/Reviews';
import UploadPhoto from '../UploadPhoto/UploadPhoto';







function ProfileInfo () {





  return (
    <div>
      
    <div>
      <form action="">
     <UploadPhoto/> 
    <span>Имя : TestUser</span>
    <span>Email : qwe@qwe.ru</span>
    <span>Дата регистрации : 01.01.2000г.</span>
    <span>Какую группу закончил : Бобры</span>
    <span>Написал отзывов : 10</span>
    <span>Рейтинг : ОверТоп</span>
    <button>Редактировать профиль</button>
    </form>
  </div>
  <div>
    Мои последние отзывы :
    <Reviews />
  </div>
  </div>
  )
}




export default ProfileInfo
