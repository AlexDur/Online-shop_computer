import { Component } from "react";
import "./App.css";
/* import Smash from "./Testing"; */
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  //Optimization: Not unnecessarily rendering extra anonymous function
  //Its a method and gets initialized only once.
  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    //Optimization: Destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <>
        <div className="App">
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="search them"
          />
          <CardList monsters={filteredMonsters} anything={["a", "c"]} />
        </div>
      </>
    );
  }
}

export default App;