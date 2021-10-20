import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details/Details';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Appointment from './Components/Appointment/Appointment';
import Cabin from './Components/Cabin/Cabin';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/appoinment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path='/cabin'>
              <Cabin></Cabin>
            </PrivateRoute>
            
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
