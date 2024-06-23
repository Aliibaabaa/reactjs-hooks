import './App.css';
import BasicUseState from './components/useState/BasicUseState';
import MultipleVariables from './components/useState/MultipleVariables';
import FunctionUpdaters from './components/useState/FunctionUpdaters';
import PreviousState from './components/useState/PreviousState';
import ComplexObjects from './components/useState/ComplexObjects';

function App() {
  return (
    <div>
      <h3> Basic useState Example: </h3>
      <BasicUseState/>

      <h3> Multiple State Variables Example: </h3>
      <MultipleVariables/>

      <h3> Initial State and Function Updaters Example: </h3>
      <FunctionUpdaters />

      <h3> Updating State based on Previous State Example: </h3>
      <PreviousState />

      <h3> Complex State Objects Example: </h3>
      <ComplexObjects />

    </div>
  );
}

export default App;
