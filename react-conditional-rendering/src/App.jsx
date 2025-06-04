import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route path="/about" element={<About loggedIn={loggedIn} />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} onLogin={() => setLoggedIn(true)} />} />
        <Route path="/account" element={<Account loggedIn={loggedIn} onLogout={() => setLoggedIn(false)} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;