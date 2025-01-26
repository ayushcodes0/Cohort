import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title, settitle] = useState("");

  const setTitle = ()=>{
    const r = Math.random();
    settitle(r);
  }

  return (
    <>
      <div>
        
        <button onClick={setTitle}>Set Title</button>
        <Header title = {title}/>
        <Header title = "Ayush"/>
        <Header title = "Ayush"/>
        <Header title = "Ayush"/>
        <Header title = "Ayush"/>
        <Header title = "Ayush"/>
        
      </div>
    </>
  )
}
const Header = React.memo(function Header({title}){
  return(
    <div className="a">
      <h4>title = {title}</h4>
    </div>
  )
})



export default App
