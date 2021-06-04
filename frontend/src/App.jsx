import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/404/404';
import AddReview from './components/AddReview/AddReview';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import PrivateOffice from './components/PrivateOffice/PrivateOffice';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Company from './components/Company/Company';
import Register from './components/Register/Register';

const mockData = [
  {
    author: 'Han Solo',
    salary: 100000,
    companyName: 'Yandex',
    direction: 'Frontend',
    position: 'Front-end разработчик',
    hrName: 'Катя',
    questions: ' 2+2? Сколько?',
    setteled: true,
    created: 2,
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
    created: 1,
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
    created: 3,
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
    created: 4,
    rating: 5,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
];

function App() {
  const [data, setData] = useState(mockData);
  const handleSort = (e) => {
    const field = e.target.dataset.name;
    setData((prev) => {
      return [...prev].sort((a, b) => a[field] - b[field]);
    });
  };
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/company">
            <Company />
          </Route>

          <Route exact path="/">
            <MainPage data={data} onSort={handleSort} />
          </Route>

          <Route exact path="/profile">
            <PrivateOffice />
            <ProfileInfo data={data} />
          </Route>

          <Route exact path="/profile/addReview">
            <AddReview />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
