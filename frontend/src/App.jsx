import React, { useEffect } from 'react';

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
import { registerAC } from './redux/actions/userAC';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import CurrentCompany from './components/CurrentCompany/CurrentCompany';

import Footer from './components/Footer/Footer';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/user/checkAuth', {
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        return res.json()
        
      }
    }).then(user => {
      if (user) {
        dispatch(registerAC(user));
      }
    });
  }, []);

  return (

    <Router>
          <div className="wrapper-body">

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

          <Route exact path="/company/:id">
            <CurrentCompany/>
          </Route>

          <Route exact path="/">
            <MainPage />
          </Route>

          <PrivateRoute exact path="/profile">
            <PrivateOffice />
            <ProfileInfo />
          </PrivateRoute>

          <Route exact path="/review/addReview">
            <AddReview />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>

      <Footer />

    </Router>
  );
}

export default App;
