import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { changeLikeFetch, getAllFetch } from "../../redux/actions/reviewsAC";


export default function OneReview() {
  const reviews = useSelector(state => state.reviews)
  const user = useSelector(state => state.user)
  const { id } = useParams();
  const [onePost, setOnePost] = useState(null);
  const dispatch = useDispatch()
  console.log(id);
  useEffect(() => {
    if (reviews.length) {
      setOnePost(reviews.find(elem => elem._id == id))
    } else {
      dispatch(getAllFetch())
    }
  }, [reviews]);

  const changeLike = () => {
    dispatch(changeLikeFetch(id))
  }
  const editPost = () => {
    dispatch(editPost())
  }


  return onePost && (
    <div className='container container-main'>
      {/* <div className={style.sectionTitle}> */}
      <Link to="/company/{onePost.company._id}"> {onePost.companyName}</Link>
      <div>URL: <a href={onePost.company.companyUrl}> {onePost.company.companyUrl}</a></div>
      <div>автор: {onePost.author.name}</div>
      <div>создан: {onePost.created}</div>
      <div>likes: {onePost.likes}</div>
      <div>Общая оценка: {onePost.rating}</div>
      <div>Направление: {onePost.direction}</div>
      <div>Должность: {onePost.position}</div>
      <div>Зарплата: {onePost.salary}</div>
      <div>Имя HR: {onePost.hrName}</div>
      <div>Вопросы с собеседования: {onePost.questions}</div>
      <div>Ссылка на код: {onePost.codFile}</div>
      <div>Общее впечатление о собеседовании: {onePost.impression}</div>
      <div>Файлы с собеседования: <img src={onePost.image} alt="Файлы с собеседования" /></div>
      <div> {onePost.setteled ? "Усторился" : "Не устроился"}</div>
      <div> {(onePost.author._id == user.id) ?
        <button onClick={e => editPost(id)}>Редактировать</button> : <button onClick={e => changeLike(id)}>Like</button>
      }

      </div>
      {/* </div> */}
    </div>
  )
}


