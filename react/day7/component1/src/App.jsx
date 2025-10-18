
import Formcomponent from '../../component_react/src/components/Formcomponent';
import './App.css'
import OrderedComponent from './components/OrderedComponent';
import UnorderedComponent from './components/UnorderedComponent';



function App() {
  

  return (
    <>
      <h1>
        Hello world
      </h1>
      
<OrderedComponent  text={ "Hello this is data"} value={34}  Array={[1234]} />
<UnorderedComponent/>
 
       
    </>
  );
}

export default App
