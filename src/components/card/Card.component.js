import { Component } from "react";
import "./card.style.css"

class Card extends Component {

    render(){

        const {id,name,email} = this.props.monsters;
        return(
            <>
            <div className="card-container" key={id}>
              <img
                alt={`${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
            </>
        )
    }
}

export default Card;