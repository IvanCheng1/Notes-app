import React from "react";
import "./App.css";
import Note from "./components/Note";
import { getNotes, addNote, deleteNote } from "./utils/api";
import InputField from "./components/InputField";
import Alert from "./components/Alert";

interface IState {
  notes: string[];
  input: string;
  alert: string;
}

class App extends React.Component<{}, IState> {
  componentDidMount() {
    getNotes().then((notes) => this.setState({ notes }));
  }

  state: IState = {
    notes: [],
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
    const { input, notes } = this.state;

    if (input === "") {
      this.setState({
        alert: "Please enter a note",
      });
    } else if (notes.includes(input)) {
      this.setState({
        alert: "Please enter a different note",
      });
    } else {
      addNote(input).then((notes) =>
        this.setState({
          input: "",
          notes,
          alert: "",
        })
      );
    }
  };

  handleDeleteNote = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    deleteNote(value).then((notes) =>
      this.setState({
        notes,
        alert: "",
      })
    );
  };

  public render() {
    const { notes, input, alert } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Notes App</h1>
          <InputField
            value={input}
            handleInputChange={this.handleInputChange}
            handleAddNote={this.handleAddNote}
          />
          <Alert alert={alert} />
          <div>
            {notes.map((n) => (
              <Note note={n} key={n} handleDelete={this.handleDeleteNote} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
