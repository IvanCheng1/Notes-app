import React from "react";
import "./App.css";
import Note from "./components/Note";

interface IState {
  notes: string[];
  input: string;
  alert: string;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    notes: ["Get a hair cut", "Buy some apples"],
    input: "",
    alert: "",
  };

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    this.setState({
      input: value,
    });
  };

  handleAddNote = (): void => {
    const { input } = this.state;

    if (input === "") {
      this.setState({
        alert: "Please enter a note"
      })
      return
    }

    this.setState((prev) => ({
      input: "",
      notes: [...prev.notes, input],
      alert: ""
    }));
  };

  handleDeleteNote = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    this.setState((prev) => ({
      notes: prev.notes.filter((n) => n !== value),
    }));
  };

  public render() {
    const { notes, input, alert } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Notes App</h1>
          <div>
            <input
              type="text"
              value={input}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleAddNote}>Add note</button>
          </div>
          {alert === "" ? "" : <div>Please enter a note</div>}
          {notes.map((n) => (
            <Note note={n} key={n} handleDelete={this.handleDeleteNote} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
