import { RecoilRoot } from "recoil";
import './App.css';
import 'antd/dist/antd.css';
import 'react-credit-cards/es/styles-compiled.css'
import Counter  from './components/Counter';
import PaymentForm  from './components/PaymentForm';


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Counter/>
        <PaymentForm/>
      </div>
    </RecoilRoot>
  );
}

export default App;
