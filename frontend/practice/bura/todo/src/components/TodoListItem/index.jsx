import { Component } from 'react';
import './index.css';

export default class TodoListItem extends Component {

  render() {

    const {
      text, onDeleted, onToggleImportant, onToggleDone,
      important, done
    } = this.props;

    let classNames = 'todo-list-item-label';

    if (done) classNames += ' done';
    if (important) classNames += ' important';

    return (
      <>
        <span
          className={ classNames }
          onClick={ onToggleDone }
        >
          { text }
        </span>
        <span className="btn-list">
          <button
            className="btn btn-outline-success btn-sm"
            onClick={ onToggleImportant }
          >
            <svg viewBox="0 0 64 512">
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" fill="#198754"/>
            </svg>
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={ onDeleted }
          >
            <svg viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="#dc3545"/>
            </svg>
          </button>
        </span>
      </>
    )
  };
}
