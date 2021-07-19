import "./App.css";
import { Grid } from "@material-ui/core";

import FormInfo from "./components/FormInfo";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <FormInfo />
    </div>
  );
}

export default App;
