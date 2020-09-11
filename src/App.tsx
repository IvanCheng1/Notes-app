import React from "react";
import "./App.css";
import Note from "./components/Note";
import {
  getNotes,
  addNote,
  deleteNote,
  editNote,
  deleteAllNotes,
} from "./utils/api";
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
    } else if (notes.includes(input.trim())) {
      this.setState({
        alert: "Please enter a different note",
      });
    } else {
      addNote(input.trim()).then((notes) =>
        this.setState({
          input: "",
          notes,
          alert: "",
        })
      );
    }
  };

  handleDeleteNote = (note: string): void => {
    deleteNote(note).then((notes) =>
      this.setState({
        notes,
        alert: "",
      })
    );
  };

  handleEditNote = (oldNote: string, newNote: string): void => {
    editNote(oldNote, newNote).then((notes) => this.setState({ notes }));
  };

  handleDeleteAll = (): void => {
    const ans = window.confirm(
      "Are you sure you want to delete all of your notes?"
    );

    if (ans) {
      deleteAllNotes().then((notes) => this.setState({ notes }));
    }
  };

  public render() {
    const { notes, input, alert } = this.state;

    return (
      <div className="App">
        <h1>Notes App</h1>
        <div className="input-header">
          <InputField
            value={input}
            handleInputChange={this.handleInputChange}
            handleAddNote={this.handleAddNote}
          />
          <Alert alert={alert} />
        </div>
        <div className="notes-holder">
          {notes.length === 0 ? (
            <div className="empty-notes">You don't have any notes!</div>
          ) : (
            notes.map((n) => (
              <Note
                note={n}
                key={n}
                handleDelete={this.handleDeleteNote}
                handleEditNote={this.handleEditNote}
              />
            ))
          )}
        </div>
        <button onClick={this.handleDeleteAll}>Delete all</button>
      </div>
    );
  }
}

export default App;
