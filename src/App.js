import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import BoardFrame from './components/boardframe/BoardFrame';
import Ribbon from './components/ribbon/Ribbon';
import ToolBox from './components/toolbox/ToolBox';

function App() {
  return (
<>
<Ribbon />
<ToolBox />
{/* <BoardFrame /> */}
</>
  );
}

export default App;
