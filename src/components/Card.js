import React from "react";
import Link from "./Link";
import "../App.css";

const Card = ({ cards }) => {
  const renderedCards = cards.map((card) => {
    return (
      <div className="ui column padded grid">
        <div classname="column">
          <div className="ui card">
            <Link className="ui medium image" href={card.widgetLink}>
              <img src={card.img} alt="" />
            </Link>
            <div className="content">
              <Link className="header" href={card.widgetLink}>
                {card.widgetName}
              </Link>
              <div className="meta">
                <div className="description" style={{ marginTop: "10px" }}>
                  {card.description}
                </div>
              </div>
            </div>
            <Link href={card.widgetLink} className="ui bottom attached button">
              <i className="add icon"></i>
              Go
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>React Component Practice</h1>
      <div className="ui three column padded grid">{renderedCards}</div>
    </div>
  );
};

export default Card;
