import Header from './Components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import { userInfo } from './utils/useContext';  // renamed for convention
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <userInfo.Provider value={{ loggedInUser: "DubeyVishal" }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </userInfo.Provider>
    </Provider>
  );
}

export default App;
