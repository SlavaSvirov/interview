import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useLoaderContext } from '../../context/LoaderContext';
import { Modal, Button } from 'antd';
import {
  changeLikeFetch,
  clear,
  getAllFetch,
} from '../../redux/actions/reviewsAC';
import Loader from '../Loader/Loader';
import './onereview.css';
export default function OneReview() {
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();
  const [onePost, setOnePost] = useState(null);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const { loader, showLoader, hideLoader } = useLoaderContext();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  }, [reviews, liked]);

  useEffect(() => {
    return () => {
      dispatch(clear());
    };
  }, []);

  const changeLike = (id, userId) => {
    if (userId) {
      dispatch(changeLikeFetch(id, userId));
      setLiked((prev) => !prev);
    }
  };

  const changeTime = (time) => {
    const newTime = time.match(/\d{4}-\d{2}-\d{2}/g);
    return newTime[0];
  };

  return (
    onePost && (
      <div className="container container-main">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="currentPost">
              <Link className="companyLink" to={`/company/${onePost.company}`}>
                {onePost.companyName}
              </Link>
              <hr />
              <div className="currentPostInfo">
                <span className="author">
                  {onePost.author.name}{' '}
                  <span>{changeTime(onePost.created)}</span>
                </span>
                <span>
                  <b>??????????????????????: </b> {onePost.direction}
                </span>
                <span>
                  <b>??????????????????: </b> {onePost.position}
                </span>
                <span>
                  <b>????????????????: </b> {onePost.salary}
                </span>
                <span>
                  <b>?????? HR: </b> {onePost.hrName}
                </span>
                <span>
                  <b>?????????????? ?? ??????????????????????????: </b> {onePost.questions}
                </span>
                <span>
                  <b>???????????? ???? ??????: </b> {onePost.codFile}
                </span>
                <span>
                  <b>?????????? ?????????????????????? ?? ??????????????????????????:</b> {onePost.impression}
                </span>
                {/* <div>
                  ?????????? ?? ??????????????????????????:
                  {onePost.image ? (
                    <img src={`${onePost.image}`} alt="?????????? ?? ??????????????????????????" />
                  ) : (
                    <span>?? ???????? ???????????? ?????? ????????????</span>
                  )}
                </div> */}
                <div className="Settled">
                  {' '}
                  {onePost.setteled ? '??????????????????' : '???? ??????????????????'}
                </div>
                <div className="reviewIcons">
                  <hr />
                  {onePost.author._id === user._id ? (
                    <Link to={`/review/edit/${onePost._id}`}>
                      <i className="fa fa-edit editBtn"></i>
                    </Link>
                  ) : (
                    <i
                      onClick={() => changeLike(id, user._id)}
                      className={`fa fa-heart ${liked ? 'red' : 'grey'} `}
                    ></i>
                  )}
                  <br />
                  <span>
                    <b>likes:</b> {onePost.likes.length}
                  </span>
                  <div>
                    {' '}
                    {onePost.image ? (
                      <>
                        <Button type="primary" onClick={showModal}>
                          ?????????? ?? ??????????????????????????:
                        </Button>
                        <Modal
                          title="Basic Modal"
                          visible={isModalVisible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          width="650px"
                        >
                          <p>?????????? ?? ??????????????????????????:</p>
                          <img
                            src={`${onePost.image}`}
                            alt="?????????? ?? ??????????????????????????"
                            style={{ width: '600px', height: '600px' }}
                          />
                        </Modal>
                      </>
                    ) : (
                      <span>?? ???????? ???????????? ?????? ????????????</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
}
