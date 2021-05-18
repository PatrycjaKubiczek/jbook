import 'bulmaswatch/superhero/bulmaswatch.min.css'
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./state";
import CodeList from './components/cell-list'
// import TextEditor from "./components/text-editor";
const App = () => {

  return (
    <Provider store={store}>
      <div>
        <CodeList />
        {/* <TextEditor /> */}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
