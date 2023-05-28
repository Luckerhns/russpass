import React, { FC, useState } from "react";
import photo1 from "../styles/images/dfs1.png";
import arrow from "../styles/images/Стрелочка иконка.svg";
import peopleDocument from "../styles/images/anketa__chelovek.png";
import cartBooking from "../styles/images/cart__booking.svg";
import heartIcon from "../styles/images/heart__icon.svg";
import ship from "../styles/images/ship.svg";
import catFeet from "../styles/images/cat__feet.svg";
import ticket from "../styles/images/ticket.svg";
import wifi from "../styles/images/wifi.svg";
import TourCard from "../components/TourCard/TourCard";
import MyQuestions from "../components/Questions/MyQuestions";
import Modal from "../components/Modal/Modal";

const Anketa: FC = () => {

  const [isVisible, setIsVibisle] = useState<boolean>(false)

  const blackSea =
    "Готовьтесь к ощущению масштабности и величия города: посетив самые известные достопримечательности, знакомых со сторону легенд и главных событий!";
  const poeticCity =
    "Готовьтесь к путешествию в исторический Нижний Новгород - город, который знакомит с прекрасной архитектурой, культурой, и наследием Средневековой России.";
  return (
      <div className="main">
        <div className="container">
          <div className="banner d-flex">
            <div className="col d-flex align-items-center justify-content-center">
              <p className="text-light bannertext">
                Развитие
                <br />
                Российского
                <br />
                туризма
              </p>
            </div>
            <div className="col">
              <img src={photo1} alt="" className="imgbanner img-fluid" />
            </div>
          </div>
        </div>
        <div className="container-fluid anketa__slide1">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="unique__tour">Как подобрать уникальный тур?</h4>
                <ul className="anketa__list">
                  <li className="anketa__li">1. Пройти анкету</li>
                  <li className="anketa__li">2. Внести пожелания</li>
                  <li className="anketa__li">3. Получить тур мечты</li>
                </ul>
                <span
                  className="btn btn-primary btn-lg"
                  id="button__more"
                  role="button"
                  aria-disabled="true"
                  onClick={e => setIsVibisle(true)}

                >
                  Подробнее
                  <img src={arrow} className="btn_arrow_desc" width="50px" height="37px" />
                </span>

              </div>
              <div className="col">
                <img src={peopleDocument} alt="" className="anketa__chelovek" />
              </div>
            </div>
          </div>
        <MyQuestions isVisible={isVisible} /> 

        </div>
        <div className="container-fluid booking">
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={cartBooking}
                  alt=""
                  className="cart__booking img-fluid"
                />
                <a
                  href="#"
                  className="btn btn-primary btn-lg "
                  role="button"
                  aria-disabled="true"
                >
                  # Акция
                </a>
              </div>
              <div className="col">
                <p className="discount">Скидка 10%</p>
                <p className="discount__text1">При бронировании от 5 ночей</p>
                <p className="discount__text2">
                  *Каждая бронь включает в себя бесплатную защиту от отмены со
                  стороны хозяина, защиту от несоответствия реальности и других
                  проблем (например, с заселением).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="triple__cart">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <TourCard
                  img={[ship, catFeet, ticket, wifi]}
                  description={blackSea}
                  cardBlockNumber="card__block_number1"
                  title={"Горячо и жарко"}
                />
                <TourCard
                  img={[ship, catFeet, ticket, wifi]}
                  description={blackSea}
                  cardBlockNumber="card__block_number2"
                  title={"Горячо и жарко"}
                />
                <TourCard
                  img={[ship, heartIcon]}
                  description={blackSea}
                  title={"Горячо и жарко"}
                  cardBlockNumber="card__block__number3"
                />
                <TourCard
                  img={[wifi, heartIcon, ship]}
                  description={poeticCity}
                  title={"Поэтическйи город"}
                  cardBlockNumber="card__block__number4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Anketa;
