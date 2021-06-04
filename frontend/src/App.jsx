

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/404/404';
import AddReview from "./components/AddReview/AddReview";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import PrivateOffice from "./components/PrivateOffice/PrivateOffice";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import Register from './components/Register/Register';

const data = [
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
  {
    author: 'Bender',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
  {
    author: 'Homer Simpson',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
  {
    author: 'Chui',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa quibusdam. Similique rerum, quisquam delectus quidem autem molestias accusamus dolores omnis odit aspernatur ut laudantium magni iure deserunt, fugit fuga. Expedita minima debitis nam facilis ratione et eaque veritatis similique suscipit, quaerat alias unde quibusdam magnam! Perferendis in reiciendis quam nam, quis eius dolorum modi quaerat provident aspernatur accusamus libero.',
  },
];


function App() {
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

          <Route exact path="/company"></Route>

          <Route exact path="/profile">
            <PrivateOffice/>
            <ProfileInfo/>
          </Route>

         

          <Route exact path="/profile/addReview">
            <AddReview/>
          </Route>
          

          <Route exact path="/">
            <MainPage data={data} />

          <Route exact path="/profile"></Route>

          <Route exact path="/">
            <MainPage />

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
