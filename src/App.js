// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import AdminPost from './components/AdminPost/AdminPost';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';
import CreateAdmin from './components/CreateAdmin/CreateAdmin';
import NotFound from './NotFound/NotFound';
import Revew from './components/Revew/Revew';
import FacebookMessanger from './components/FacebookMessanger/FacebookMessanger';
import ResetPassword from './components/Login/ResetPassword/ResetPassword';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <div >
   <AuthProvider>
   <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute  path="/dashboard">
          <Dashboard></Dashboard>
         </PrivateRoute>
         <Route exact path="/register">
         <Register></Register>
           </Route>
         <Route exact path="/login">
           <Login></Login>
           </Route>
         <Route   path="/explore">
         <Explore></Explore>
         </Route>
         <PrivateRoute path='/confirmOrder/:id'>
           <ConfirmOrder></ConfirmOrder>
         </PrivateRoute>
         <Route path="/manageOrder">
           <ManageOrder></ManageOrder>
         </Route>
         <Route path="/createAdmin">
           <CreateAdmin></CreateAdmin>
         </Route>
         <Route   path="/adminPost">
         <AdminPost></AdminPost>
         </Route>
         <Route path="payment">
           <Payment></Payment>
         </Route>
         <Route path="revew">
           <Revew></Revew>
         </Route>
         <Route path="messanger">
           <FacebookMessanger></FacebookMessanger>
         </Route>
         <Route path='/placeOrder'>
           <PlaceOrder></PlaceOrder>
         </Route>
       <Route path="/resetPassword">
         <ResetPassword></ResetPassword>
       </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       
     </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
