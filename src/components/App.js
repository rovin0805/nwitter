import { useState } from "react";
import Router from "components/Router";
import { authService } from "fbInstance";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>©{new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
