import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtodos } from "./store/redux/slice";
function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log(state)


  if (state.todo.isLoding) {
    return <h1>Loading..</h1>

  }


  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchtodos())}>Fetch TODOS</button>
      {
        state.todo.data && state.todo.data.map(e => <li>{e.title}</li>)
      }
    </div>
  );
}

export default App;
