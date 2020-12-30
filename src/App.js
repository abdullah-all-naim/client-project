import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Subscriber from './Subscriber/Subscriber';
import Benefit from './Benefit/Benefit';
import Article from './Article/Article';
import SignUp from './SignUp/SignUp';
import Faq from './Faq/Faq';
import ChatAdmin from './ChatAdmin/ChatAdmin';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
// import Sample from './Sample/Sample';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    {/* <Route exact path='/signup' component={SignupPage} /> */}
      {/* <Navigation></Navigation>
      <Header></Header>
      <Subscriber></Subscriber>
      <div style={{ backgroundColor: '#F1F1F1' }}>
        <Benefit></Benefit>
        <Testimonial></Testimonial>
        <Faq></Faq>
        <ChatAdmin></ChatAdmin>
        <SignUp></SignUp>
        <Article></Article>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
