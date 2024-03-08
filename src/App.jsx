import './App.css'
import UseCallback from './Components/UseCallback/UseCallback'
import UseContextComp from './Components/UseContext/UseContextComp'
import UseEffectComp from './Components/UseEffectComp'
import UseMemoComp from './Components/UseMemoComp'
import UseReducerComp from './Components/UseReducerComp'
import UseRefComp, { UseRefComp2 } from './Components/UseRefComp'
import UseStateComp from './Components/UseStateComp'

function App() {

  return (
    <>
      {/* <UseStateComp /> */}
      {/* <UseEffectComp /> */}
      {/* <UseMemoComp /> */}
      {/* <UseCallback /> this has error*/}
      {/* <UseRefComp />
      <UseRefComp2 /> */}

      {/* <UseReducerComp /> */}
       <UseContextComp />
    </>
  )
}

export default App
