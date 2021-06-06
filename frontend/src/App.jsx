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
import { useDispatch, useSelector } from 'react-redux';
import { registerAC } from './redux/actionCreators/userAC';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getAllFetch } from './redux/actions/reviewsAC';

function App() {
  const data = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFetch());
  }, []);

  const [isSorted, setisSorted] = useState(false);

  const handleSort = (e) => {
    const field = e.target.dataset.name;
    const direction = isSorted ? -1 : 1;
    const sortedData = data.sort((a, b) => {
      if (a[field] === b[field]) return 0;
      return a[field] > b[field] ? direction : -direction;
    });
    // setData([...sortedData]);
    setisSorted(!isSorted);
  };

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
      </Router>
    </div>
  );
}

export default App;
