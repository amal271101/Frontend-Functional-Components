import "./App.css";
import { LogIn } from "./Authentication/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "./SharedComponents/SideBar/SideBar";
import { Profile } from "./Sections/Profile";
import { Deck } from "./Sections/Deck";
import { ToDo } from "./Sections/Todo";
import { QnA } from "./Sections/QnA";
import { Impressum } from "./Sections/Impressum";
import { ExpandedCard } from "./Sections/ExpandedCard";
import { useEffect, useState } from "react";
import { ErrorPage } from "./Sections/ErrorPage";
import { SignUp } from "./Authentication/SignUp";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://127.0.0.1:8085/deck", {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  function updateState(newdata) {
    setData(newdata);
  }

  return (
    <div className="home-container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Deck sidebar={<SideBar />} data={data} />}
            data={data}
          />
          <Route
            path="/deck"
            element={<Deck sidebar={<SideBar />} data={data} />}
            data={data}
          />
          <Route path="/todo" element={<ToDo sidebar={<SideBar />} />} />
          <Route path="/qna" element={<QnA sidebar={<SideBar />} />} />
          <Route
            path="/deck/:id"
            element={<ExpandedCard data={data} updateState={updateState} />}
          />
          <Route path="/error" element={<ErrorPage sidebar={<SideBar />} />} />

          <Route
            path="/impressum"
            element={<Impressum sidebar={<SideBar />} />}
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/user" element={<Profile sidebar={<SideBar />} />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
