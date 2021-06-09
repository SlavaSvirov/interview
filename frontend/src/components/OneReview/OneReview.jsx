import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useLoaderContext } from '../../context/LoaderContext';
import { changeLikeFetch, getAllFetch } from '../../redux/actions/reviewsAC';
import Loader from '../Loader/Loader';

export default function OneReview() {
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [onePost, setOnePost] = useState(null);
  const dispatch = useDispatch();

  const { loader, showLoader, hideLoader } = useLoaderContext();

  useEffect(() => {
    if (reviews.length) {
      setOnePost(reviews.find((elem) => toString(elem._id) === toString(id)));
    } else {
      showLoader();
      dispatch(getAllFetch()).then(() => hideLoader());
    }
  }, [reviews]);

  const changeLike = () => {
    showLoader();
    dispatch(changeLikeFetch(id)).then(() => hideLoader());
  };

  return (
    onePost &&(
      <div className="container container-main">
        {console.log(onePost.author._id,user._id,onePost.author.name )}
        {loader ? (
          <Loader />
        ) : (
            <>
              <Link to="/company/{onePost.company._id}">
                {' '}
                {onePost.companyName}
              </Link>
              <div>
                URL:{' '}
                <a href={onePost.company.companyUrl}>
                  {' '}
                  {onePost.company.companyUrl}
                </a>
              </div>
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
              <div>
                Файлы с собеседования:{' '}
                <img
                  src={`http://localhost:3001/${onePost.image}`}
                  alt="Файлы с собеседования"
                />
              </div>
              <div> {onePost.setteled ? 'Усторился' : 'Не устроился'}</div>
              <div>
                {onePost.author._id ===user._id ? (
                  <button><Link to={`/review/edit/${onePost._id}`}>
                  </Link></button>
                ) : (
                    <button onClick={changeLike}>Like</button>
                  )}
              </div>
            </>
          )}
      </div>
    )
  )
}
