import './modal.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Switch } from 'antd';
import { editProfileFetch } from '../../redux/actions/userAC';
import { useHistory } from 'react-router';

function Modal({ active, setActive }) {
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [telegram, setTelegram] = useState(user.telegram);
  const [show, setShow] = useState(false);

  function updateName(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function updateSurname(e) {
    console.log(e.target.value);
    setSurname(e.target.value);
  }

  function updateEmail(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function updateTelegram(e) {
    console.log(e.target.value);
    setTelegram(e.target.value);
  }

  function check(checked) {
    console.log(checked);
    setShow(checked);
  }

  useEffect(() => {
    return () => {};
  }, []);

function submitForm (e) {
  e.preventDefault()
  
  if (name.trim() && surname.trim() && email.trim() && telegram.trim()) {
    
    dispatch(editProfileFetch(name, surname, email, telegram))
    setActive(false)
  history.push(`/user/${idUser}`)
      }
 }
  


  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal-content active' : 'modal-content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="as">
          <div className="form-group">
            <h3>Редактирование профиля</h3>

            <form onSubmit={(e) => submitForm(e)}>
              <label htmlFor="">Name</label>
              <input onChange={(e) => updateName(e)} value={name} />
              <label htmlFor="">Surname</label>
              <input
                onChange={(e) => updateSurname(e)}
                value={surname}
                type="text"
              />
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => updateEmail(e)}
                value={email}
                type="text"
              />
              <label htmlFor="">Telegram</label>
              <input
                onChange={(e) => updateTelegram(e)}
                value={telegram}
                type="text"
              />
              <label htmlFor="">Показать контакты</label>
              <Switch onChange={check} />
              <button type="submit" className="btn btn-success">
                Сохранить изменения
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
