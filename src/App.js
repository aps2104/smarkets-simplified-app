import React from "react";
import EventContainer from "./components/EventContainer";
import Header from "./components/Header";
import EventInfoContainer from "./components/EventInfoContainer";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="events">
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/sports/football" />}
            />
            <Route path="/sports/football" element={<EventContainer />} />
            <Route path={"/events/:eventId"} element={<EventInfoContainer />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route
              path={
                "/events/:eventId/:eventCategory/:eventType/:eventTitle/:eventYear/:eventMonth/:eventDate/:eventTime/:eventTeam"
              }
              element={<EventInfoContainer />}
            />
            <Route path="*" element={<Navigate replace to="/not-found" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
