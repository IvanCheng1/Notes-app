import React from "react";
import "./App.css";
import List from "./components/List";

interface IState {
  Reminders: string[],
  [key: string]: string[],
}

class App extends React.Component<{} ,IState> {
  state: IState = {
    Reminders: ["Get a hair cut", "Buy some apples"],
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Notes App</h1>
          <List />
        </header>
      </div>
    );
  }
}

export default App;
