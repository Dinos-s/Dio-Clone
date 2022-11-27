import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Cadastro } from './pages/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
