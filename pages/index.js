import App from "../components/App";
import "./index.module.css";
import { StateProvider } from "../components/StateProvider";
import reducer, { initialState } from "../components/reducer";



function index() {
  return (
    <div>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </div>
  );
}

export default index;
