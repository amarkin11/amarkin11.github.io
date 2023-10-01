import './index.css';

const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>сделано { todo } из { done }</h2>
    </div>

  );
};

export default AppHeader;
