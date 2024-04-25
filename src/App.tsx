import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTasks from './components/AllTasks/AllTasks';
import DeletedTasks from './components/DeletedTasks/DeletedTasks';
import { Provider } from 'react-redux';
import {store} from './store/store'
import Tabs from './components/Tabs/Tabs';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="app">
        <Tabs/>
        <Routes>
           <Route path="/" element={<AllTasks />} />
          <Route path="/deleted-tasks" element={<DeletedTasks />} /> 
        </Routes>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
