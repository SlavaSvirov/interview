import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/404/404';
import AddReview from './components/AddReview/AddReview';
import Header from './components/Header/Header';
import Login from './components/User/Login/Login';
import MainPage from './components/MainPage/MainPage';
import PrivateOffice from './components/PrivateOffice/PrivateOffice';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Company from './components/Company/Company';
import Register from './components/User/Register/Register';
import { useDispatch } from 'react-redux';
import { registerAC } from './redux/actionCreators/userAC';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

const mockData = [
  {
    author: 'Han Solo',
    salary: 100000,
    companyName: 'Yandex',
    direction: 'Frontend',
    position: 'Front-end разработчик',
    interviewee: 'Паша',
    questions: 'Что такое массив?',
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
    interviewee: 'Евгений',
    questions: 'Что такое объект?',
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
    questions: 'Чем отличается null и undefined',
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
    questions: 'Что такое осень?',
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
  const [isSorted, setisSorted] = useState(false);

  const handleSort = (e) => {
    const field = e.target.dataset.name;
    const direction = isSorted ? -1 : 1;
    const sortedData = data.sort((a, b) => {
      if (a[field] === b[field]) return 0;
      return a[field] > b[field] ? direction : -direction;
    });
    setData([...sortedData]);
    setisSorted(!isSorted);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/user/checkAuth', {
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        dispatch(registerAC());
      }
    });
  }, []);

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

          <PrivateRoute exact path="/profile">
            <PrivateOffice />
            <ProfileInfo onSort={handleSort} data={data} />
          </PrivateRoute>

          {/* <Route exact path="/profile">
            <PrivateOffice />

            <ProfileInfo onSort={handleSort} data={data} />
          </Route>*/}

          <Route exact path="/review/addReview">
            <AddReview />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
