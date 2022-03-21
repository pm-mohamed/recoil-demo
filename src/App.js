import { RecoilRoot } from "recoil";
import './App.css';
import 'antd/dist/antd.css';
import 'react-credit-cards/es/styles-compiled.css'
import PaymentForm  from './components/PaymentForm';


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <PaymentForm/>
      </div>
    </RecoilRoot>
  );
}

export default App;
