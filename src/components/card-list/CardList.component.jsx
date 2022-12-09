import { Component } from "react";
import Card from "../card/Card.component";
import "./card-list.style.css"

class CardList extends Component {
  render() {
    // console.log("render")
    // console.log(this.props)
    const { monsters } = this.props;
    return (
      <>
        <div className="card-list">
          {monsters.map((monster) => {
            {/* const {name,email,id} = monster; */}
            return(
            <Card monsters = {monster}/>
          )})}
        </div>
      </>
    );
  }
}

export default CardList;
