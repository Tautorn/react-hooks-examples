import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import WrapperUseState from './examples/useState'
import WrapperUseMemo from './examples/useMemo'
import WrapperUseEffect from './examples/useEffect'
import WrapperUseReducer from './examples/useReducer'
import WrapperUseRef from './examples/useRef'
import WrapperUseContext from './examples/useContext'
import WrapperUseCallback from './examples/useCallback'

const App = () => {

  const [hook, setHook] = useState('useState')

  return (
    <div className="App">
      <ul>
        <li><button className="button green" href="#" onClick={() => setHook('useState')}> Use State</button></li>
        <li><button className="button green" href="#" onClick={() => setHook('useEffect')}> Use Effect</button></li>
        <li><button className="button green" href="#" onClick={() => setHook('useRef')}> Use Ref</button></li>
        <li><button className="button green" href="#" onClick={() => setHook('useMemo')}>  Use Memo</button></li>
        <li><button className="button red" href="#" onClick={() => setHook('useReducer')}> Use Reducer</button></li>
        <li><button className="button green" href="#" onClick={() => setHook('useContext')}> Use Context</button></li>
        <li><button className="button green" href="#" onClick={() => setHook('useCallback')}> Use Callback</button></li>
        <li><button className="button red" href="#" onClick={() => setHook('useImperativeHandle')}> Use useImperativeHandle</button></li>
        <li><button className="button red" href="#" onClick={() => setHook('useLayoutEffect')}> Use useLayoutEffect</button></li>
        <li><button className="button red" href="#" onClick={() => setHook('useDebugValue')}> Use useDebugValue</button></li>
      </ul>

      {hook === 'useState' && (<WrapperUseState />)}
      {hook === 'useEffect' && (<WrapperUseEffect setHook={setHook} />)}
      {hook === 'useRef' && (<WrapperUseRef />)}
      {hook === 'useMemo' && (<WrapperUseMemo />)}
      {hook === 'useReducer' && (<WrapperUseReducer />)}
      {hook === 'useContext' && (<WrapperUseContext />)}
      {hook === 'useCallback' && (<WrapperUseCallback />)}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
