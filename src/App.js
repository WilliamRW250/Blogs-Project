import Home from "./Home";
import {Provider} from 'react-redux'
import store from "./redux/store";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserContainer from "./components/UserContainer";
import UserPostsContainer from './components/UserPostsContainer'
import SinglePostContainer from "./components/SinglePostContainer";

function App() {
  return (
  <Router>
  <Provider store = {store}>
    <div className="App ">
      <Home />
      <div className="container">
        <Switch>
          <Route exact path='/'>
             <UserContainer />
          </Route>
          <Route path='/postsList'>
             <UserPostsContainer />
          </Route>
          <Route path='/userPost/:id'>
             <SinglePostContainer />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Provider>
    </Router>
  );
}

export default App;
