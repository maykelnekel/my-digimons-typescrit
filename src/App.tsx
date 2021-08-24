import { ToastContainer } from "react-toastify";
import "./App.css";
import NavigationBar from "./Components/Nav";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Routes />
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
