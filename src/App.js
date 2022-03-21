import { RecoilRoot } from "recoil";
import './App.css';
import 'antd/dist/antd.css';
import Counter  from './components/Counter';


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Counter/>
      </div>
    </RecoilRoot>
  );
}

export default App;
