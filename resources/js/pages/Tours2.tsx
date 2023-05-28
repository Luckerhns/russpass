import React, { FC } from "react";

const Tours2: FC = () => {
  return (
    <div>
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
              <img
                src="assets/images/dfs1.png"
                alt=""
                className="imgbanner img-fluid"
              />
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
                <a
                  href="#"
                  className="btn btn-primary btn-lg"
                  id="button__more"
                  role="button"
                  aria-disabled="true"
                >
                  Подробнее{" "}
                  <img
                    src="./assets/images/Стрелочка иконка.svg"
                    width="50px"
                    height="37px"
                  />
                </a>
              </div>
              <div className="col">
                <img
                  src="./assets/images/anketa__chelovek.png"
                  alt=""
                  className="anketa__chelovek"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid booking">
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src="./assets/images/cart__booking.svg"
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
                <div className="col-sm cart1">
                  <h5>Горячо и жарко</h5>
                  <p className="cart__text">
                    Черное море. Побывайте в одном из самых красивых мест в мире
                    - парке "Олимпийская деревня", где проходили XXII зимние
                    Олимпийские игры.
                  </p>
                  <div className="row">
                    <div className="col">
                      <img
                        src="./assets/images/heart__icon.svg"
                        alt=""
                        className="heart__icon"
                      />
                      <a> 11 </a>
                    </div>
                    <div className="col-6 icons" style={{ minWidth: "170px" }}>
                      <img
                        src="./assets/images/ship.svg"
                        alt=""
                        className="ship__icon"
                      />
                      <img
                        src="./assets/images/cat__feet.svg"
                        alt=""
                        className="cat__icon"
                      />
                      <img
                        src="./assets/images/ticket.svg"
                        alt=""
                        className="ticket__icon"
                      />
                      <img
                        src="./assets/images/wifi.svg"
                        alt=""
                        className="wifi__icon"
                      />
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
                <div className="col-sm cart1">
                  <h5>Необычная Москва</h5>
                  <div className="text__cart">
                    <p className="cart__text">
                      Готовьтесь к ощущению масштабности и величия города:
                      посетив самые известные достопримечательности, знакомых со
                      сторону легенд и главных событий!
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img
                        src="./assets/images/heart__icon.svg"
                        alt=""
                        className="heart__icon"
                      />
                      <a> 11 </a>
                    </div>
                    <div className="col-6 icons" style={{ minWidth: "170px" }}>
                      <img
                        src="./assets/images/aero.svg"
                        alt=""
                        className="aero__icon"
                      />
                      <img
                        src="./assets/images/cat__feet.svg"
                        alt=""
                        className="cat__icon"
                      />
                      <img
                        src="./assets/images/ticket.svg"
                        alt=""
                        className="ticket__icon"
                      />
                      <img
                        src="./assets/images/wifi.svg"
                        alt=""
                        className="wifi__icon"
                      />
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
                <div className="col-sm cart1">
                  <h5>Поэтический город</h5>
                  <div className="text__cart">
                    <p className="cart__text">
                      Готовьтесь к путешествию в исторический Нижний Новгород -
                      город, который знакомит с прекрасной архитектурой,
                      культурой, и наследием Средневековой России.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img
                        src="./assets/images/heart__icon.svg"
                        alt=""
                        className="heart__icon"
                      />
                      <a> 11 </a>
                    </div>
                    <div className="col-6 icons" style={{ minWidth: "170px" }}>
                      <img
                        src="./assets/images/train.svg"
                        alt=""
                        className="train__icon"
                      />
                      <img
                        src="./assets/images/cat__feet.svg"
                        alt=""
                        className="cat__icon"
                      />
                      <img
                        src="./assets/images/ticket.svg"
                        alt=""
                        className="ticket__icon"
                      />
                      <img
                        src="./assets/images/wifi.svg"
                        alt=""
                        className="wifi__icon"
                      />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours2;
