import React from "react";
import Input from "./Input";

interface IProps {
  note: string;
  handleDelete: (note: string) => void;
  handleEditNote: (oldNote: string, newNote: string) => void;
}

interface IState {
  edit: boolean;
  newNote: string;
}

class Note extends React.Component<IProps, IState> {
  state: IState = {
    edit: false,
    newNote: "",
  };

  handleEditButton = () => {
    if (this.state.edit) {
      // edit is true
      // save
      this.props.handleEditNote(this.props.note, this.state.newNote);
      // clear edit
      this.setState((prev) => ({
        edit: !prev.edit,
        newNote: "",
      }));
    } else {
      this.setState((prev) => ({
        edit: !prev.edit,
        newNote: this.props.note,
      }));
    }
  };

  handleNewInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    this.setState({ newNote: value });
  };

  public render() {
    const { note, handleDelete } = this.props;
    const { edit, newNote } = this.state;

    return (
      <div>
        <button value={note} onClick={() => handleDelete(note)}>
          Delete
        </button>
        {edit ? (
          <Input
            value={newNote}
            handleChange={this.handleNewInputChange}
          />
        ) : (
          <>{note}</>
        )}

        <button value={note} onClick={() => this.handleEditButton()}>
          {edit ? "Save" : "Edit"}
          {/* Edit */}
        </button>
      </div>
    );
  }
}

export default Note;
