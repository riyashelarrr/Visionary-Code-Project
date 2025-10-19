import logo from './logo.svg';
import './App.css';
import { HeaderButton } from './shared-comp/Header-Button';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <div className="App">
     <Provider>
     <HeaderButton />
     </Provider>
    </div>
  );
}

export default App;
