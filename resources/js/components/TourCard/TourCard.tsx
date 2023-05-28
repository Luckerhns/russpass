import React, { FC, useEffect } from "react";

interface ICardProps {
  img: string[];
  title: string;
  description: string;
  cardBlockNumber: string;

}

const TourCard: FC<ICardProps> = ({ img, title, description, cardBlockNumber }) => {
    useEffect(() => {
      const icons = document.querySelectorAll<HTMLImageElement>(`.${
        cardBlockNumber} > .row > .col-6 > .plusses`
      ) as NodeListOf<HTMLImageElement>
      icons?.forEach((e, i) => {
        e.src = img[i];
      });
  }, []);

  return (
    <div className={["col-sm cart1", cardBlockNumber].join(' ')}>
      <h3>{title}</h3>
      <div className="text__cart">
        <p className="cart__text">
            {description}
        </p>
      </div>
      <div className="row">
        <div className="col">
          <img alt="" className="heart__icon" />
          <a> 11 </a>
        </div>
        <div className="col-6 icons" style={{ minWidth: "170px" }}>
          <img alt="" className="ship__icon plusses" />
          <img alt="" className="cat__icon plusses" />
          <img alt="" className="ticket__icon plusses" />
          <img alt="" className="wifi__icon plusses" />
        </div>
      </div>
      <a
        href="#"
        className="btn btn-primary btn-lg "
        role="button"
        aria-disabled="true"
      >
        Выбрать
      </a>
    </div>
  );
};

export default TourCard;
