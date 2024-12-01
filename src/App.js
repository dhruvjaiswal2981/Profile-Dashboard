import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ProfileCard from "./components/ProfileCard";
import ConversationPanel from "./components/ConversationPanel";
import ActionsPanel from "./components/ActionsPanel";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Tabs />
        <div className="content">
          <ProfileCard />
          <ConversationPanel />
          <ActionsPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
