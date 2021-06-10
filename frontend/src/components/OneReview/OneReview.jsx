import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useLoaderContext } from '../../context/LoaderContext';
import { changeLikeFetch, getAllFetch } from '../../redux/actions/reviewsAC';
import Loader from '../Loader/Loader';
import './onereview.css';

export default function OneReview() {
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);

  const { id } = useParams();
  const [onePost, setOnePost] = useState(null);
  const dispatch = useDispatch();
  console.log({ onePost });
  const { loader, showLoader, hideLoader } = useLoaderContext();

  useEffect(() => {
    if (reviews.length) {
      setOnePost(
        reviews.find((elem) => {
          return elem._id == id;
        })
      );
    } else {
      showLoader();
      dispatch(getAllFetch()).then(() => hideLoader());
    }
  }, []);

  const changeLike = (id, userId) => {
    showLoader();
    dispatch(changeLikeFetch(id, userId)).then(() => hideLoader());
  };

  return (
    onePost && (
      <div className="container container-main">
        {console.log(onePost)}
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className='currentPost'>
              <Link className='companyLink' to="/company/{onePost.company._id}">
                {onePost.companyName}
              </Link>
              <hr />
              <div className='currentPostInfo'>
                <span className='author'>{onePost.author.name} <span>{onePost.created}</span></span>
                <span><b>Направление:                      </b> {onePost.direction}</span>
                <span><b>Должность:                        </b> {onePost.position}</span>
                <span><b>Зарплата:                         </b> {onePost.salary}</span>
                <span><b>Имя HR:                           </b> {onePost.hrName}</span>
                <span><b>Вопросы с собеседования:          </b> {onePost.questions}</span>
                <span><b>Ссылка на код:                    </b> {onePost.codFile}</span>
                <span><b>Общее впечатление о собеседовании:</b> {onePost.impression}</span>
                <div>
                  Файлы с собеседования:{' '}
                  <img
                    src={`http://localhost:3001/${onePost.image}`}
                    alt="Файлы с собеседования"
                  />
                </div>
                <div> {onePost.setteled ? 'Усторился' : 'Не устроился'}</div>
                <div className='reviewIcons'>
                <hr />
                  {onePost.author._id === user._id ? (
                    <button>
                      <Link to={`/review/edit/${onePost._id}`}>Edit</Link>
                    </button>
                  ) : (
                    <i onClick={() => changeLike(id, user._id)} className='fa fa-heart'></i>
                  )}
                  <br />
                <span><b>likes:</b> {onePost.likes.length}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
}
