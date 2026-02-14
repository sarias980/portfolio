import { BrowserRouter as Router } from 'react-router-dom';
import AppNavigation from './navigations/app-navigation';

function App() {
  return (
    <Router>
      <AppNavigation />
    </Router>
  );
}

export default App;
