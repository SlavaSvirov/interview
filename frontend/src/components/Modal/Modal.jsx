
import "./modal.css";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {
  Form,
  Input,
  Switch
} from 'antd';
import {editProfileUser} from '../../redux/actions/userAC'




function Modal ({active, setActive, idUser}) {
  // const [modalActive, setModalActive] = useState(true)
  console.log('====>>>>>>>>>>>>>',idUser);
  
  const [inputModal, setinputModal] = useState('')
  const dispatch = useDispatch()

  const onValuesChange = async (values) => {
    // console.log('======',values.name);

  }
  useEffect(() => {
    return() =>{
    }
  },[])


  function inputHandler () {
    // setinputModal(e.target.value)
  dispatch(editProfileUser(idUser))

  }

  function submitForm (e) {
    e.preventDefault()
   
    if (inputModal.trim()) {

      
      setinputModal('')
      setActive(false)

    }
  }
return (
  <div className= {active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
<div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
  <div className='as'>
  <div className="form-group">
    <h3>Редактирование профиля</h3>

    
    <Form onValuesChange={(e) => onValuesChange(e)}>
    <Form.Item name="name" label="Name" >
          <Input placeholder="Введи имя" />
        </Form.Item>
        <Form.Item name="surname" label="Surname">
          <Input placeholder="Введи фамилию" />
        </Form.Item>

        <Form.Item name="telegram" label="Telegram">
          <Input placeholder="Введи телефон" />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input placeholder="Введи электронную почту" />
        </Form.Item>

        <Form.Item name="switch" label="Показать контакты" valuePropName="checked">
        <Switch />
      </Form.Item>
        </Form>
  </div>
  <button type="submit" className="btn btn-success">Сохранить изменения</button>
</div>
</div>
  </div>
)
}

export default Modal
