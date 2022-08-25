import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import Connect from "containers/pages/Connect";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display*/}
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home />} />
          
          {/* Conect with Web3*/}
          <Route path="/connect" element={<Connect/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
