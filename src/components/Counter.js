
import { useRecoilState } from 'recoil'
import { count } from '../atoms/atoms'

function Counter(){
  const [countState, setCount] = useRecoilState(count);;
  return (
    <div>
      <h1>{countState}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increase count</button>
    </div>
  );
}

export default Counter;