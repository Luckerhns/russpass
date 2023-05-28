import React, { FC } from "react";
import rate from "../styles/images/rating.svg";
import li1 from "../styles/images/+11.svg";
import restourant from "../styles/images/ресторан.svg";
import heartIcon from "../styles/images/heart__icon.svg";
import wifi from "../styles/images/wifi.svg";
import parking from "../styles/images/Частная парковка.svg";
import il from "../styles/images/+11.svg";
import illib from "../styles/images/i1big.png";
import arrowWithout from "../styles/images/arrow-bez-palochki.png";

const FavoriteTours: FC = () => {
  return (
      <div className="main">
        <div className="h1tours container d-flex justify-content-center ">
          <h1>Избранные туры</h1>
        </div>
        <div className="container ">
          <div className="row flex-wrap justify-content-center">
            <div className="col-4" style={{ minWidth: "380px" }}>
              <div className="card d-flex">
                <div className="rating d-flex align-items-center justify-content-center">
                  8.8
                </div>
                <img src={il} className="image__card" />
                <div className="d-flex align-items-center justify-content-end">
                  <div className="city d-flex align-self-center w-50 d-flex justify-content-center">
                    Город
                  </div>
                  <div className="stars d-flex align-items-center gap-2">
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                  </div>
                </div>
                <div className="info__card">
                  <div className="naming__container d-flex justify-content-between">
                    <div className="naming">
                      Название города
                      <br />
                      Экскурсия по городу <br />
                      Посещение музея
                      <br />
                    </div>
                    <div className="food__refound">
                      <p className="text-success">
                        Бесплатная отмена
                        <br />
                        Питание включено
                      </p>
                    </div>
                  </div>
                  <div className="icons__card">
                    <img src={parking} />
                    <img src={wifi} />
                    <img src={heartIcon} />
                    <img src={restourant} />
                  </div>
                  <div className="buttons__card d-flex justify-content-around">
                    <div className="button__buy">
                      <button type="button" className="btn btn-warning">
                        <span>от 3 880 ₽</span>
                        <br />
                        <span className="old__price">
                          <s>от 6 000 ₽</s> 10%
                        </span>
                        <div className="icon d-flex align-items-center justify-content-start">
                          <img
                            className="icon__btn"
                            src={arrowWithout}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                    <div className="liked">
                      <button type="button" className="">
                        <img src={heartIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4" style={{ minWidth: "380px" }}>
              <div className="card d-flex">
                <div className="rating d-flex align-items-center justify-content-center">
                  8.8
                </div>
                <img src={il} className="image__card" />
                <div className="d-flex align-items-center justify-content-end">
                  <div className="city d-flex align-self-center w-50 d-flex justify-content-center">
                    Город
                  </div>
                  <div className="stars d-flex align-items-center gap-2">
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                  </div>
                </div>
                <div className="info__card">
                  <div className="naming__container d-flex justify-content-between">
                    <div className="naming">
                      Название города
                      <br />
                      Экскурсия по городу <br />
                      Посещение музея
                      <br />
                    </div>
                    <div className="food__refound">
                      <p className="text-success">
                        Бесплатная отмена
                        <br />
                        Питание включено
                      </p>
                    </div>
                  </div>
                  <div className="icons__card">
                    <img src={parking} />
                    <img src={wifi} />
                    <img src={restourant} />
                    <img src={li1} />
                  </div>
                  <div className="buttons__card d-flex justify-content-around">
                    <div className="button__buy">
                      <button type="button" className="btn btn-warning">
                        <span>от 3 880 ₽</span>
                        <br />
                        <span className="old__price">
                          <s>от 6 000 ₽</s> 10%
                        </span>
                        <div className="icon d-flex align-items-center justify-content-start">
                          <img
                            className="icon__btn"
                            src={arrowWithout}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                    <div className="liked">
                      <button type="button" className="">
                        <img src={heartIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4" style={{ minWidth: "380px" }}>
              <div className="card d-flex">
                <div className="rating d-flex align-items-center justify-content-center">
                  8.8
                </div>
                <img src={il} className="image__card" />
                <div className="d-flex align-items-center justify-content-end">
                  <div className="city d-flex align-self-center w-50 d-flex justify-content-center">
                    Город
                  </div>
                  <div className="stars d-flex align-items-center gap-2">
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                  </div>
                </div>
                <div className="info__card">
                  <div className="naming__container d-flex justify-content-between">
                    <div className="naming">
                      Название города
                      <br />
                      Экскурсия по городу <br />
                      Посещение музея
                      <br />
                    </div>
                    <div className="food__refound">
                      <p className="text-success">
                        Бесплатная отмена
                        <br />
                        Питание включено
                      </p>
                    </div>
                  </div>
                  <div className="icons__card">
                    <img src={parking} />
                    <img src={wifi} />
                    <img src={li1} />
                    <img src={wifi} />
                  </div>
                  <div className="buttons__card d-flex justify-content-around">
                    <div className="button__buy">
                      <button type="button" className="btn btn-warning">
                        <span>от 3 880 ₽</span>
                        <br />
                        <span className="old__price">
                          <s>от 6 000 ₽</s> 10%
                        </span>
                        <div className="icon d-flex align-items-center justify-content-start">
                          <img
                            className="icon__btn"
                            src={arrowWithout}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                    <div className="liked">
                      <button type="button" className="">
                        <img src={heartIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1>Также рекомендуем</h1>
            <div className="col-8" style={{ minWidth: "380px" }}>
              <div className="card d-flex">
                <div className="rating d-flex align-items-center justify-content-center">
                  8.8
                </div>
                <img src={illib} className="image__card" />
                <div className="d-flex align-items-center justify-content-center">
                  <div className="stars d-flex align-items-center gap-2">
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                  </div>
                </div>
                <div className="info__card">
                  <div className="naming__container d-flex justify-content-between">
                    <div className="naming">
                      Название города
                      <br />
                      Экскурсия по городу <br />
                      Посещение музея
                      <br />
                    </div>
                    <div className="food__refound">
                      <p className="text-success">
                        Бесплатная отмена
                        <br />
                        Питание включено
                      </p>
                    </div>
                  </div>
                  <div className="icons__card">
                    <img src={parking} />
                    <img src={wifi} />
                    <img src={wifi} />
                    <img src={wifi} />
                  </div>
                  <div className="buttons__card d-flex justify-content-center">
                    <div className="button__buy">
                      <button type="button" className="btn btn-warning">
                        <span>от 3 880 ₽</span>
                        <br />
                        <span className="old__price">
                          <s>от 6 000 ₽</s> 10%
                        </span>
                        <div className="icon d-flex align-items-center justify-content-start">
                          <img
                            className="icon__btn"
                            src={arrowWithout}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                    <div className="liked">
                      <button type="button" className="">
                        <img src={heartIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4" style={{ minWidth: "380px" }}>
              <div className="card d-flex">
                <div className="rating d-flex align-items-center justify-content-center">
                  8.8
                </div>
                <img src={il} className="image__card" />
                <div className="d-flex align-items-center justify-content-end">
                  <div className="city d-flex align-self-center w-50 d-flex justify-content-center">
                    Город
                  </div>
                  <div className="stars d-flex align-items-center gap-2">
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                    <img
                      src={rate}
                      className="align-self-end"
                    />
                  </div>
                </div>
                <div className="info__card">
                  <div className="naming__container d-flex justify-content-between">
                    <div className="naming">
                      Название города
                      <br />
                      Экскурсия по городу <br />
                      Посещение музея
                      <br />
                    </div>
                    <div className="food__refound">
                      <p className="text-success">
                        Бесплатная отмена
                        <br />
                        Питание включено
                      </p>
                    </div>
                  </div>
                  <div className="icons__card">
                    <img src={parking} />
                    <img src={wifi} />
                    <img src={wifi} />
                    <img src={wifi} />
                  </div>
                  <div className="buttons__card d-flex justify-content-around">
                    <div className="button__buy">
                      <button type="button" className="btn btn-warning">
                        <span>от 3 880 ₽</span>
                        <br />
                        <span className="old__price">
                          <s>от 6 000 ₽</s> 10%
                        </span>
                        <div className="icon d-flex align-items-center justify-content-start">
                          <img
                            className="icon__btn"
                            src={arrowWithout}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                    <div className="liked">
                      <button type="button" className="">
                        <img src={heartIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FavoriteTours;
