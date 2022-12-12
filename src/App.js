import { Component, useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title,setTitle] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleUpperCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monster-search-box"
      /> <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="set title"
        className="title-box"
      />
      <br />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   // 1
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//       // monsters: [
//       //   {
//       //     name: "Sujata",
//       //     id: "1e2331",
//       //   },
//       //   {
//       //     name: "Sujan",
//       //     id: "1e233132",
//       //   },
//       //   {
//       //     name: "Susil",
//       //     id: "1e2331ec",
//       //   },
//       //   {
//       //     name: "Radha",
//       //     id: "1e2331eb",
//       //   },
//       //   {
//       //     name: "Kamal",
//       //     id: "1e233121",
//       //   },
//       // ],
//     };
//   }

//   componentDidMount() {
//     // 3
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );
//   }

//    onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searchString = event.target.value.toLocaleLowerCase();
//     // const filteredMonsters = this.state.monsters.filter((monster) => {
//     //  return monster.name.toLocaleLowerCase().includes(searchString);
//     // });
//     // this.setState(
//     //   () => {
//     //     return { monsters: filteredMonsters };
//     //   },
//     //   () => {
//     //     console.log(this.state);
//     //   }
//     // );
//     this.setState (()=>{
//       return { searchField:searchString}
//     })
//   }

//   render() {
//     // 2

//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;
//    const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      });
//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="search monsters"
//           onChange={onSearchChange}
//         /> */}
//         {/* {filteredMonsters.map((monster) => (
//           <div key={monster.id}>
//             <h1>{monster.name}</h1>
//           </div>
//         ))} */}
//         <SearchBox  onChangeHandler = {onSearchChange} placeholder = "search monsters" className = "monster-search-box"/>
//         <br />
//       <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
