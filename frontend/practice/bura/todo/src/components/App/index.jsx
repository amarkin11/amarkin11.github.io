import { Component } from 'react';
import AppHeader from '../AppHeader';
import ItemAddForm from '../ItemAddForm';
import ItemStatusFilter from  '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';

import './index.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Learn React')
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(text) {
    return {
      text,
      id: ++this.maxId,
      important: false,
      done: false
    }
  };

  deleteItem = (id) => {
    this.setState((state) => {
      const { todoData } = state,
            newArr = [...todoData],
            idx = newArr.findIndex((el) => el.id === id);

      newArr.splice(idx, 1);
      // variant #2:
      // const newArr = [
      //   ...todoData.slice(0, idx),
      //   ...todoData.slice(idx + 1)
      // ];

      return {
        todoData: newArr
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const { todoData } = state;

      return {
        todoData: [...todoData, newItem]
      }
    })
  };

  toggleProp = (arr, id, propName) => {
    const newArr = [...arr],
          idx = newArr.findIndex((el) => el.id === id);
    const currentItem = newArr[idx],
          newItem = {...currentItem, [propName]: !currentItem[propName]};

    // variant #2:
    // const newArr = [
    //   ...todoData.slice(0, idx),
    //   newItem,
    //   ...todoData.slice(idx + 1)
    // ];

    newArr[idx] = newItem

    return newArr;
  };

  toggleImportant = (id) => {

    this.setState((state) => {
      const { todoData } = state;

      return {
        todoData: this.toggleProp(todoData, id, 'important')
      }
    })
  };

  toggleDone = (id) => {

    this.setState((state) => {
      const { todoData } = state;

      return {
        todoData: this.toggleProp(todoData, id, 'done')
      }
    });
  };

  onSearchChange = (term) => this.setState({ term });

  onFilterChange = (filter) => this.setState({ filter });

  search(items, term) {
    if(term === '') return items;

    return items
            .filter((item) => item.text.toLowerCase().indexOf(term.toLowerCase()) > -1);

    // variant #2:
    // return items.filter((item) => item.text.match(new RegExp(term, 'ig')));
  };

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items;
    }
  };

  render() {

    const { todoData, term, filter } = this.state,
          doneCount = todoData.filter((el) => el.done).length;

    const visibleItems = this.filter(this.search(todoData, term), filter);

    return (
      <div className="todo-app">
        <AppHeader
          todo={ doneCount }
          done= { todoData.length }
        />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearchChange={ this.onSearchChange }
          />
          <ItemStatusFilter
            filter={ filter }
            onFilterChange={ this.onFilterChange }
          />
        </div>

        <TodoList
          todos={ visibleItems }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.toggleImportant }
          onToggleDone={ this.toggleDone }
        />

        <ItemAddForm
          onAdded={ this.addItem }
        />
      </div>
    );
  };
};
