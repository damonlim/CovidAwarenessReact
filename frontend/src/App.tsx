import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeclarationForm from "./pages/form/DeclarationForm";
import Report from "./pages/report/Report";

const title = "Covid-19 Exposure Awareness";

function App() {
  return (
    <>
      <header className="App-header">{title}</header>
      <Header />
      <Switch>
        <Route exact path="/" component={DeclarationForm} />
        <Route path="/report" component={Report} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
