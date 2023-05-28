import React, { FC } from "react";
import hash from "../styles/images/hash.svg";
import hotelContent from "../styles/images/slides/content_hotel_6319c15c6f9687.24707435.jpg";
import map from "../styles/images/map.svg";
import calendar from "../styles/images/calendar.svg";
import nutrition from "../styles/images/nutrition.svg";
import disabledIcon from "../styles/images/free icon disabled.svg";
import wifi from "../styles/images/wifi.svg";
import galochka from "../styles/images/galoochka.svg";
import krestik from "../styles/images/krestik.svg";

const Tours: FC = () => {
  return (
      <div className="main">
        <div className="container">
          <div className="container p-3 d-flex align-items-center justify-content-center tour__title">
            <h1 className="title__tour">Название Тура</h1>
          </div>
          <div className="container slider">
            <img className="slide" src={hotelContent} alt="" />
          </div>
          <div className="container tags p-3">
            <div className="row align-items-center justify-content-center gap-4 px-4">
              <div className="col tag d-flex gap-2 align-items-center justify-content-center">
                <img className="hash-icon" src={hash} alt="" />
                <span>История</span>
              </div>
              <div className="col tag d-flex gap-2 align-items-center justify-content-center">
                <img className="hash-icon" src={hash} alt="" />
                <span>Море</span>
              </div>
              <div className="col tag d-flex gap-2 align-items-center justify-content-center">
                <img className="hash-icon" src={hash} alt="" />
                <span>Транспорт</span>
              </div>
              <div className="col tag d-flex gap-2 align-items-center justify-content-center">
                <img className="hash-icon" src={hash} alt="" />
                <span>Природа</span>
              </div>
              <div className="col tag d-flex gap-2 align-items-center justify-content-center">
                <img className="hash-icon" src={hash} alt="" />
                <span>Экскурсии</span>
              </div>
              <div className="col tag d-flex gap-2 align-items-center justify-content-center">
                <img className="hash-icon" src={hash} alt="" />
                <span>Музей</span>
              </div>
            </div>
          </div>
          <div className="container p-3 tour__info">
            <div className="row">
              <div className="col info">
                <div className="advantages gap-2">
                  <div className="advantage">
                    <img src={map} alt="" />
                    <span>Местоположение: Город</span>
                  </div>
                  <div className="advantage">
                    <img src={calendar} alt="" />
                    Время пребывания: 3 суток
                  </div>
                  <div className="advantage">
                    <img src={nutrition} alt="" />
                    Включено: завтрак
                  </div>
                  <div className="advantage">
                    <img className="img__icon" src={disabledIcon} alt="" />
                    Подходит для людей с ОВЗ
                  </div>
                  <div className="advantage">
                    <img src={wifi} alt="" />
                    На протяжении всей поездки присутствует Wi-Fi
                  </div>
                </div>
                <div className="stars__price">
                  <div className="stars">
                    <img src="assets/images/star.svg" alt="" />
                    <img src="assets/images/star.svg" alt="" />
                    <img src="assets/images/star.svg" alt="" />
                    <img src="assets/images/star.svg" alt="" />
                    <img src="assets/images/star.svg" alt="" />
                  </div>
                  <div className="price"> от 34 990 ₽/чел</div>
                </div>
              </div>
              <div className="col calendar">Календарь</div>
            </div>
          </div>
          <div className="container tour__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              felis sed lacus finibus ultrices. Integer bibendum libero eros,
              vitae posuere tortor rutrum nec. Morbi tincidunt egestas arcu nec
              blandit. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Praesent congue libero vel dui viverra, nec sollicitudin
              nunc pretium. Morbi et iaculis mi. Nunc risus odio, imperdiet at
              velit in, mollis aliquet enim. Aliquam sodales magna elit, vel
              consequat massa auctor in. Curabitur ut pulvinar nisl. Vestibulum
              ut dolor eu nulla mattis consectetur. Nulla imperdiet dui vitae mi
              lacinia, dignissim dignissim erat gravida. Phasellus metus lacus,
              aliquet ac ultrices ac, iaculis id nibh. Aenean sollicitudin nisi
              eget eros luctus pharetra.
            </p>
            <p>
              Proin interdum mauris et lacus dictum viverra. Aenean faucibus
              quam ac ipsum eleifend luctus. Vestibulum non nisl ut justo
              interdum tempus vel molestie ante. Sed condimentum sodales arcu
              vel tempus. Morbi vestibulum metus vitae congue lobortis. Vivamus
              ornare ante at enim maximus, condimentum dapibus elit sodales. In
              hac habitasse platea dictumst. Nulla facilisi.
            </p>
            <p>
              Mauris rutrum dignissim enim ut condimentum. Integer quis
              scelerisque nisl. Fusce ac mi sed neque mattis consectetur sed
              quis purus. Donec at pharetra mi. Aliquam ornare ornare odio, in
              commodo ligula accumsan aliquam. Vestibulum lacinia tempus lacus,
              at ultricies turpis. Integer porta quam massa, quis interdum sem
              volutpat vitae. Duis cursus nunc sed sapien venenatis pulvinar.
              Etiam auctor neque risus, at molestie metus aliquam a. Aliquam
              erat volutpat. Donec tincidunt erat magna, eget ultricies nibh
              condimentum ac. Nunc auctor metus congue nibh dignissim venenatis.
            </p>
          </div>
          <div className="container cards d-flex align-items-center justify-content-center p-3">
            <div className="row">
              <div className="col card">
                <div className="card-body h-100">
                  <div className="mark">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_237_13912)">
                        <path
                          d="M80 35.9972C80 38.7039 76.022 40.8419 75.3344 43.3326C74.6468 45.9085 77.0392 49.7582 75.7152 52.0156C74.3911 54.2731 69.8562 54.1651 68.0036 55.9961C66.151 57.8271 66.2987 62.3876 64.0256 63.7125C61.7524 65.0374 57.9222 62.6435 55.3479 63.3315C52.8588 63.9968 50.7164 68 48.017 68C45.3177 68 43.181 64.0196 40.6919 63.3315C38.1119 62.6435 34.2646 65.0374 32.0085 63.7125C29.7524 62.3876 29.8604 57.8555 28.0305 55.9961C26.2007 54.1367 21.6431 54.2902 20.319 52.0156C18.9949 49.7411 21.3873 45.9085 20.6997 43.3326C19.978 40.8249 16 38.7039 16 35.9972C16 33.2904 19.978 31.1581 20.6656 28.6674C21.3532 26.0915 18.9607 22.2362 20.2848 19.9844C21.6089 17.7326 26.1382 17.8349 27.9964 16.0039C29.8547 14.1729 29.7013 9.61244 31.9744 8.28752C34.2476 6.9626 38.0778 9.35655 40.6578 8.6685C43.1469 8.0032 45.2836 4 47.983 4C50.6823 4 52.8247 7.98045 55.3138 8.6685C57.8881 9.35655 61.7354 6.9626 63.9915 8.28752C66.2476 9.61244 66.1396 14.1445 67.9695 16.0039C69.7993 17.8634 74.357 17.7098 75.6811 19.9844C77.0052 22.2589 74.6127 26.0915 75.3003 28.6674C75.9652 31.1581 79.9659 33.2961 79.9659 35.9972"
                          fill="#F2D6A6"
                        />
                        <path
                          d="M40.5 46V41M40.5 31V26M38 28.5H43M38 43.5H43M49 27L47.2658 31.5089C46.9838 32.2421 46.8428 32.6087 46.6235 32.9171C46.4292 33.1904 46.1904 33.4292 45.9171 33.6235C45.6087 33.8428 45.2421 33.9838 44.5089 34.2658L40 36L44.5089 37.7342C45.2421 38.0162 45.6087 38.1572 45.9171 38.3765C46.1904 38.5708 46.4292 38.8096 46.6235 39.0829C46.8428 39.3913 46.9838 39.7579 47.2658 40.4911L49 45L50.7342 40.4911C51.0162 39.7579 51.1572 39.3913 51.3765 39.0829C51.5708 38.8096 51.8096 38.5708 52.0829 38.3765C52.3913 38.1572 52.7579 38.0162 53.4911 37.7342L58 36L53.4911 34.2658C52.7579 33.9838 52.3913 33.8428 52.0829 33.6235C51.8096 33.4292 51.5708 33.1904 51.3765 32.9171C51.1572 32.6087 51.0162 32.2421 50.7342 31.5089L49 27Z"
                          stroke="#1D1D1D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_237_13912"
                          x="0"
                          y="0"
                          width="96"
                          height="96"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="12" />
                          <feGaussianBlur stdDeviation="8" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_237_13912"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_237_13912"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="card-title">
                    <h5>Общее</h5>
                  </div>
                  <div className="card-text">
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Бесплатная отмена</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Питание включено</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Бесплатный Wi-Fi</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>10 минут от центра города</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Кафе / ресторан </span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>
                        Удобства для гостей с
                        <br />
                        ограниченными возможностями здоровья
                      </span>
                    </div>
                    <hr />
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Курение</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Вечеринки</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Животные</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Не более 3 человек</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col card ">
                <div className="card-body h-100">
                  <div className="mark">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_237_13954)">
                        <path
                          d="M80 35.9972C80 38.7039 76.022 40.8419 75.3344 43.3326C74.6468 45.9085 77.0392 49.7582 75.7151 52.0156C74.3911 54.2731 69.8562 54.1651 68.0036 55.9961C66.151 57.8271 66.2987 62.3876 64.0256 63.7125C61.7524 65.0374 57.9222 62.6435 55.3479 63.3315C52.8588 63.9968 50.7164 68 48.017 68C45.3177 68 43.181 64.0196 40.6919 63.3315C38.1119 62.6435 34.2646 65.0374 32.0085 63.7125C29.7524 62.3876 29.8604 57.8555 28.0305 55.9961C26.2007 54.1367 21.6431 54.2902 20.319 52.0156C18.9949 49.7411 21.3873 45.9085 20.6997 43.3326C19.978 40.8249 16 38.7039 16 35.9972C16 33.2904 19.978 31.1581 20.6656 28.6674C21.3532 26.0915 18.9607 22.2362 20.2848 19.9844C21.6089 17.7326 26.1382 17.8349 27.9964 16.0039C29.8547 14.1729 29.7013 9.61244 31.9744 8.28752C34.2476 6.9626 38.0778 9.35655 40.6578 8.6685C43.1469 8.0032 45.2836 4 47.983 4C50.6823 4 52.8247 7.98045 55.3138 8.6685C57.8881 9.35655 61.7354 6.9626 63.9915 8.28752C66.2476 9.61244 66.1396 14.1445 67.9695 16.0039C69.7993 17.8634 74.357 17.7098 75.6811 19.9844C77.0052 22.2589 74.6127 26.0915 75.3003 28.6674C75.9652 31.1581 79.9659 33.2961 79.9659 35.9972"
                          fill="#F2D6A6"
                        />
                        <path
                          d="M58 40C58 43.3137 55.3137 46 52 46C48.6863 46 46 43.3137 46 40C46 35.6863 52 26 52 26C52 26 58 35.6863 58 40Z"
                          stroke="#40071E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M44 33C44 34.6569 42.6569 36 41 36C39.3431 36 38 34.6569 38 33C38 30.8431 41 26 41 26C41 26 44 30.8431 44 33Z"
                          stroke="#40071E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_237_13954"
                          x="0"
                          y="0"
                          width="96"
                          height="96"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="12" />
                          <feGaussianBlur stdDeviation="8" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_237_13954"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_237_13954"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="card-title">
                    <h5>Санузел</h5>
                  </div>
                  <div className="card-text">
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Фен</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Душ</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Ванная</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Шампунь</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Полотенца</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Тапочки</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Гель для души</span>
                    </div>
                    <hr />
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Биде</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Шапочки для душа</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Халаты</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Бритвенный набор</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col card">
                <div className="card-body h-100">
                  <div className="mark">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_237_13996)">
                        <path
                          d="M80 35.9972C80 38.7039 76.022 40.8419 75.3344 43.3326C74.6468 45.9085 77.0392 49.7582 75.7151 52.0156C74.3911 54.2731 69.8562 54.1651 68.0036 55.9961C66.151 57.8271 66.2987 62.3876 64.0256 63.7125C61.7524 65.0374 57.9222 62.6435 55.3479 63.3315C52.8588 63.9968 50.7164 68 48.017 68C45.3177 68 43.181 64.0196 40.6919 63.3315C38.1119 62.6435 34.2646 65.0374 32.0085 63.7125C29.7524 62.3876 29.8604 57.8555 28.0305 55.9961C26.2007 54.1367 21.6431 54.2902 20.319 52.0156C18.9949 49.7411 21.3873 45.9085 20.6997 43.3326C19.978 40.8249 16 38.7039 16 35.9972C16 33.2904 19.978 31.1581 20.6656 28.6674C21.3532 26.0915 18.9607 22.2362 20.2848 19.9844C21.6089 17.7326 26.1382 17.8349 27.9964 16.0039C29.8547 14.1729 29.7013 9.61244 31.9744 8.28752C34.2476 6.9626 38.0778 9.35655 40.6578 8.6685C43.1469 8.0032 45.2836 4 47.983 4C50.6823 4 52.8247 7.98045 55.3138 8.6685C57.8881 9.35655 61.7354 6.9626 63.9915 8.28752C66.2476 9.61244 66.1396 14.1445 67.9695 16.0039C69.7993 17.8634 74.357 17.7098 75.6811 19.9844C77.0052 22.2589 74.6127 26.0915 75.3003 28.6674C75.9652 31.1581 79.9659 33.2961 79.9659 35.9972"
                          fill="#F2D6A6"
                        />
                        <path
                          d="M58 39.8442C56.6866 40.4382 55.2286 40.7688 53.6935 40.7688C47.9153 40.7688 43.2312 36.0847 43.2312 30.3065C43.2312 28.7714 43.5618 27.3134 44.1558 26C40.5258 27.6416 38 31.2947 38 35.5377C38 41.3159 42.6841 46 48.4623 46C52.7053 46 56.3584 43.4742 58 39.8442Z"
                          stroke="#1D1D1D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_237_13996"
                          x="0"
                          y="0"
                          width="96"
                          height="96"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="12" />
                          <feGaussianBlur stdDeviation="8" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_237_13996"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_237_13996"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="card-title">
                    <h5>Все для комфорта</h5>
                  </div>
                  <div className="card-text">
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Стиральная машина </span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Утюг</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Кофемашина</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Лифт</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Кондиционер</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Smart-TV</span>
                    </div>
                    <div className="card-item">
                      <img src={galochka} alt="" />
                      <span>Акустическая система</span>
                    </div>

                    <hr />
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Система “Умный дом”</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Соковыжималка</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Камин</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Подогрев пола</span>
                    </div>
                    <div className="card-item">
                      <img src={krestik} alt="" />
                      <span>Парковка</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container control d-flex align-items-center justify-content-center p-3 gap-2">
            <div className="button__buy">
              <button type="button" className="btn btn-warning">
                <span>от 3 880 ₽</span>
                <br />
                <span className="old__price">
                  <s>от 6 000 ₽</s> 10%
                </span>
                <div className="icon__block__btn d-flex align-items-center justify-content-start">
                  <img
                    className="icon__btn"
                    src="assets/images/arrow-bez-palochki.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div className="liked">
              <button type="button" className="">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 46 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.100098"
                    width="45.6"
                    height="48"
                    rx="8"
                    fill="#1D1D1D"
                    fillOpacity="0.15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.8933 17.1358C20.8939 14.7984 17.5599 14.1696 15.0548 16.31C12.5498 18.4504 12.1971 22.029 14.1643 24.5604C15.8 26.6651 20.7499 31.1041 22.3722 32.5408C22.5538 32.7016 22.6445 32.7819 22.7504 32.8135C22.8428 32.8411 22.9438 32.8411 23.0362 32.8135C23.1421 32.7819 23.2328 32.7016 23.4143 32.5408C25.0367 31.1041 29.9866 26.6651 31.6222 24.5604C33.5895 22.029 33.2799 18.4279 30.7318 16.31C28.1836 14.1922 24.8927 14.7984 22.8933 17.1358Z"
                    fill="#1D1D1D"
                    fillOpacity="0.15"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Tours;
