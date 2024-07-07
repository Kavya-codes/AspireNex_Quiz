import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import QuizList from './pages/QuizList'; 
import CreateQuiz from './pages/CreateQuiz'; 
import Login from './pages/Login'; 
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quizzes" component={QuizList} />
            <Route path="/create" component={CreateQuiz} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
