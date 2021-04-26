import '../styles/App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from './AddProperty';

function App() {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.userId);
  };
  
  const handleLogout = () => {
    window.FB.logout(() => {});
    setUserId("");
  };

  return (
    <div className="surreal-estate">
      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={(props) => <Properties {...props} userId={userId} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
