// // import { useEffect } from "react";
// import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// const company = {
//   id: '3643187',
//   name: '001KZ (001КЗ)',
//   url: 'https://api.hh.ru/employers/3643187',
//   alternate_url: 'https://hh.ru/employer/3643187',
//   logo_urls: {
//     original: 'https://hhcdn.ru/employer-logo-original/619773.jpg',
//     240: 'https://hhcdn.ru/employer-logo/2920245.jpeg',
//     90: 'https://hhcdn.ru/employer-logo/2920244.jpeg',
//   },
//   vacancies_url: 'https://api.hh.ru/vacancies?employer_id=3643187',
//   open_vacancies: 4,
// };
// const descriptionCompany = {
//   id: '36227',
//   trusted: true,
//   name: '000 МАГАЗИН МАГАЗИНОВ - Эксперт по торговой недвижимости',
//   type: 'company',
//   description:
//     '<p><strong>МАГАЗИН МАГАЗИНОВ – самая крупная консалтинговая компания в России, которая специализируется на торговой недвижимости</strong>.</p> <p>www.magazinmagazinov.ru</p>   <strong>22 года</strong> мы создаем успешные торговые центры по всей России и странах СНГ, <p>ежегодно заключаем сотни сделок по помещениям стрит-ритейл, помогаем ритейлерам, девелоперам и инвесторам добиваться выдающихся результатов в бизнесе.</p>   <p><strong>Достижения:</strong></p> <p>1 231 207 м. – сдано в аренду (портфолио проектов на сайте)</p> <p>2 631 – магазинов открыто</p> <p>Компания трижды удостоена престижной премии<strong> «Консультант года»</strong><strong> RCSC</strong><strong> Awards</strong> <strong>в  2016 ,2017 и в 2018 году</strong></p> <p>Более 17 наших проектов торговых центров номинированы на премии РСТЦ и CRE Awards</p>   <strong>Крупнейший портфель объектов</strong> <strong>:</strong> <p>41 Торговый центр в 19 городах РФ (от Хабаровска до Санкт-Петербурга)</p> <p>1010 Помещений street-retail</p>   <strong>Сегодня мы стремимся стать абсолютным лидером</strong><strong> на рынках торговых центров РФ и стрит-ритейла</strong>, среди консалтинговых и брокерских компаний. <p>Будем рады видеть в нашей команде экспертов и начинающих специалистов, стремящихся работать на пике своих возможностей, чтобы стать успешными профессионалами в торговой недвижимости.</p>   <p><strong>В чем наши преимущества для кандидатов?:</strong></p> <p><strong>1.     </strong> Возможность хорошо зарабатывать (предлагаем самые конкурентоспособные условия среди брокеров и консультантов в РФ);</p> <p><strong>2.     </strong> Уникальная и наиболее полная информационная система по торговой недвижимости, позволяющая быстро находить клиентов и заключать сделки;</p> <p><strong>3.     </strong> Работа в команде лучших экспертов по торговой недвижимости в РФ, <em>и просто отличных людей</em> :)</p> <p><strong>4.     </strong> Известность, отличная репутация и опыт компании;</p> <p><strong>5.     </strong> Профессиональное обучение – каждый новый сотрудник проходит месячный учебный курс, и далее постоянно развивает свои навыки и экспертизу;</p> <p><strong>6.     </strong> Медийная и рекламная поддержка проектов, PR продвижение сотрудников;</p> <p><strong>7.     </strong> Реальный карьерный рост: система грейдов в зависимости от опыта, возможность стать руководителем группы и руководителем направления;</p> <p><strong>8.     </strong> Демократичный стиль управления, комфортная атмосфера в коллективе;</p> <p><strong>9.     </strong> Красивый светлый офис в центре Москвы, куда хочется пригласить своих клиентов.</p>   <p>Присылайте Ваше резюме, и мы с радостью обсудим наши совместные перспективы!</p>',
//   site_url: 'http://www.magazinmagazinov.ru',
//   alternate_url: 'https://hh.ru/employer/36227',
//   vacancies_url: 'https://api.hh.ru/vacancies?employer_id=36227',
//   logo_urls: {
//     240: 'https://hhcdn.ru/employer-logo/2419770.png',
//     90: 'https://hhcdn.ru/employer-logo/2419769.png',
//     original: 'https://hhcdn.ru/employer-logo-original/494504.png',
//   },
//   relations: [],
//   area: {
//     id: '1',
//     name: 'Москва',
//     url: 'https://api.hh.ru/areas/1',
//   },
//   industries: [
//     {
//       id: '13.666',
//       name: 'Агентские услуги в недвижимости',
//     },
//     {
//       id: '13.665',
//       name: 'Консалтинг, оценка в недвижимости',
//     },
//     {
//       id: '13.664',
//       name: 'Управление и эксплуатация недвижимости',
//     },
//     {
//       id: '13.654',
//       name: 'Девелопмент',
//     },
//     {
//       id: '44.393',
//       name: 'Консалтинговые услуги',
//     },
//   ],
//   branded_description: null,
//   branding: null,
//   insider_interviews: [],
//   open_vacancies: 0,
// };
// const reviewsForCompany = [
//   {
//     author: 'Ниссей',
//     date: '03.06.2021 08: 55 ',
//     info: 'Грязь.,пыль. Обед максимум 15 минут. остальное время как на конвейере. Все время на ногах и на руках. Не ходите к такому работодателю. Вы там будете ни кто. Максимум продержитесь три недели , это максимум. Минимум пол дня для сообразительных , кто сразу поймет куда он попал.',
//     company: 'Академия продаж Андрея Крупкина',
//   },
//   {
//     author: 'Киев',
//     date: '03.06.2021 08: 58',
//     info: '  Уважаемые соискатели, пожалуйста, правильно формируйте свои ожидания.Если вы думаете, что вы сейчас пройдёте конкурс на право обучаться в и сразу же вам откроется истина вселенская, вы станете гуру продаж, это не так.Здесь вам дают крутые инструменты и качественную обратную связь',
//     company: 'Слеза в камне',
//   },
// ];

// function createMarkup() {
//   return { __html: descriptionCompany.description };
// }

// export default function Company() {
  // const { id } = useParams();
  //const reviews = useSelector(state => state.reviews);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setDataFromApiCompany())
  // }, []);

  // const companysFromSate = useSelector(state => state.companys);
  //const reviewsForCompany =reviews.filter(elem=>{elem.companys==})

//   return (
//     <>
//       <h1>{company.name} </h1>
//       <div>
//         <div>
//           container for logo
//           <img src={company.logo_urls.original} alt={company.name}></img>
//         </div>
//         <div dangerouslySetInnerHTML={createMarkup()} />
//         {/* <h2>REVIEWS</h2> */}
//         <ul>
//           {reviewsForCompany.map((item) => (
//             <li key={item._id}>
//               <div>{item.author} </div>
//               <div>{item.info} </div>
//               <div>{item.date} </div>
//               <div>{item.company} </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {allFetch} from '../../redux/actions/companyAC'
import './company.css'

export default function Company() {

const dispatch = useDispatch()
const companies = useSelector(state => state.companys)
console.log(companies);

useEffect(() => {
  dispatch(allFetch())
},[])

  return (
   <div className='companyDiv'>
     <ul>

    {companies.map(comp => 
<Link to={`company/${comp._id}`}>
    <li key={comp._id}>
     Название компании : {comp.companyName}
    </li>
</Link>
    )}
     </ul>
   </div>
  )
}
