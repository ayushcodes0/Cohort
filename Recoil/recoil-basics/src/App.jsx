import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  const [count , setCount] = useRecoilState(countAtom);
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
         <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>

        <p> {(isEven? "": "It is even ")}</p>
    </>
  )
}

export default App
