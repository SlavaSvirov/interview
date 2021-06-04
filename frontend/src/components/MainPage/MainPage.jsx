import styles from './MainPage.module.css';
import React, { useState } from 'react';
import AutoComplete from '../CustomAutoComplete/CustomAutoComplete';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
const mockData = [
  {
    author: 'Han Solo',
    salary: 100000,
    companyName: 'Yandex',
    direction: 'Frontend',
    position: 'Front-end разработчик',
    interviewee: 'Катя',
    questions: ' 2+2? Сколько?',
    hired: true,
    rating: 4,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
  {
    author: 'Bender',
    salary: 80000,
    companyName: 'Google',
    direction: 'Frontend',
    position: 'Front-end разработчик',
    interviewee: 'Катя',
    questions: ' 2+2? Сколько?',
    hired: true,
    rating: 2,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
  {
    author: 'Bart',
    salary: 20000,
    companyName: 'Шаурма',
    direction: 'Frontend',
    position: 'Front-end разработчик',
    interviewee: 'Катя',
    questions: ' 2+2? Сколько?',
    hired: true,
    rating: 3,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
  {
    author: 'Kolya',
    salary: 120000,
    companyName: 'Sibur',
    direction: 'Frontend',
    position: 'Front-end разработчик',
    interviewee: 'Коля',
    questions: '2+2? Сколько?',
    hired: true,
    rating: 5,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
];

const MainPage = () => {
  const [data, setData] = useState(mockData);

  const handleSort = (field) => {
    setData((prev) => {
      return;
    });
  };

  return (
    <div>
      <AutoComplete />
      <div className={styles.sortWrapper}>
        <Sort onSort={handleSort} />
      </div>
      <hr />
      {data?.map((review) => {
        return <Reviews key={review.author} review={review} />;
      })}
    </div>
  );
};

export default MainPage;
