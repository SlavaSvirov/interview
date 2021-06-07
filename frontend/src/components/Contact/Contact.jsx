import { Link } from 'react-router-dom';
import style from './contact.module.css'

function Contact() {
  return (
    <div className='container container-main'>
      <div className={style.sectionTitle}>
        <h5>WE'D LOVE TO HEAR FROM YOU</h5>
        <h1>Do you have a question, or would you like to find out more about <span className={style.logo}>Interv<span className={style.red}>/eW</span></span> ?</h1>
        <span>For all support and technical enquiries, please email:
          <a href='mailto:support@interview.com'>support@interview.com</a>
        </span>
      </div>
    </div>
  )
}

export default Contact
