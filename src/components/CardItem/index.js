import React from "react";
// import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={props.vid}>
          <figure className="cards__item__pic-wrap">
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text" href={props.git}>
              {" "}
              {props.text}{" "}
            </h5>
            <a className="git__item__text" href={props.git}>
              {" "}
              {props.gitText}{" "}
            </a>
            <a className="site__item__text" href={props.git}>
              {" "}
              {props.liveSite}{" "}
            </a>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
