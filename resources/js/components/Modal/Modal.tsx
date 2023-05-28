import React, { FC } from "react";
import './style.modal.css'


const Modal:FC = () => {
  return (
    <div
      className="modal fade"
      id="regModal"
      tabIndex={1}
      aria-labelledby="regModalLabel"
      style={{display: localStorage.getItem('modalVisible') ? 'flex' : 'none'}}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <div className="btn-group">
              <button type="button" className="btn btn-light">
                <h3 className="modal-title fs-5" id="ModalLabel">
                  Регистрация
                </h3>
              </button>
              <button type="button" className="btn btn-warning">
                <h3 className="modal-title fs-5" id="ModalLabel">
                  Авторизация
                </h3>
              </button>
            </div>
          </div>
          <form>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Введите номер телефона
                </label>
                <div className="block__input__modal">
                  <svg
                    className="icon__modal"
                    width="28"
                    height="28"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.87525 13.978C2.47357 11.2584 1.56906 8.11924 1.20635 4.60403C1.06221 3.20711 0.990146 2.50865 1.36855 1.91936C1.47909 1.7472 1.64389 1.56452 1.8038 1.43688C2.35114 1 3.11273 1 4.6359 1V1C5.83143 1 6.4292 1 6.89829 1.27561C7.04641 1.36264 7.1827 1.46839 7.3038 1.59025C7.6873 1.97618 7.83578 2.55521 8.13276 3.71327L8.93851 6.8553C9.24719 8.059 9.40153 8.66085 9.21869 9.21639C9.03584 9.77194 8.55422 10.1645 7.59097 10.9495L3.87525 13.978ZM3.87525 13.978C5.97269 18.0475 9.18338 21.1775 13.3578 23.2222M13.3578 23.2222C16.1991 24.614 19.487 25.503 23.1742 25.8432C24.477 25.9634 25.1285 26.0235 25.6842 25.6966C25.9104 25.5636 26.1404 25.3538 26.2937 25.1408C26.6702 24.6174 26.6702 23.9115 26.6702 22.4997V22.4997C26.6702 21.3739 26.6702 20.8109 26.4258 20.3631C26.3194 20.168 26.1811 19.9919 26.0167 19.8422C25.6394 19.4988 25.0925 19.3655 23.9987 19.0989L20.5074 18.248C19.3465 17.9651 18.766 17.8236 18.2283 17.9967C17.6907 18.1697 17.3017 18.6233 16.5239 19.5303L13.3578 23.2222Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="tel"
                    className="form-control input__modal"
                    id="inputPhone"
                    aria-describedby="phone"
                    required
                    placeholder="+7 (___) ___-__-__ "
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Введите номер телефона
                </label>
                <div className="block__input__modal">
                  <svg
                    className="icon__modal"
                    width="28"
                    height="28"
                    viewBox="0 0 37 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.17157 1.17157C0 2.34315 0 4.22877 0 8.00001V21.6C0 25.3712 0 27.2569 1.17157 28.4284C2.34315 29.6 4.22876 29.6 8 29.6H29C32.7712 29.6 34.6569 29.6 35.8284 28.4284C37 27.2569 37 25.3712 37 21.6V8C37 4.22876 37 2.34315 35.8284 1.17157C34.6569 0 32.7712 0 29 0H8C4.22876 0 2.34315 0 1.17157 1.17157ZM7.81603 6.77596C7.47138 6.5462 7.00573 6.63933 6.77596 6.98397C6.5462 7.32862 6.63933 7.79427 6.98397 8.02404L18.084 15.424C18.3359 15.592 18.6641 15.592 18.916 15.424L30.016 8.02404C30.3607 7.79427 30.4538 7.32862 30.224 6.98397C29.9943 6.63933 29.5286 6.5462 29.184 6.77596L18.5 13.8986L7.81603 6.77596Z"
                      fill="#1D1D1D"
                    />
                  </svg>
                  <input
                    type="email"
                    className="form-control input__modal"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    required
                    placeholder="example@mail.ru"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Введите номер телефона
                </label>
                <div className="block__input__modal">
                  <svg
                    className="icon__modal"
                    width="28"
                    height="28"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5 11.4989V20.2489C25.5 21.6413 26.0531 22.9766 27.0377 23.9612C28.0223 24.9458 29.3576 25.4989 30.75 25.4989C32.1424 25.4989 33.4777 24.9458 34.4623 23.9612C35.4469 22.9766 36 21.6413 36 20.2489V18.4989C35.9998 14.5492 34.6634 10.7157 32.2082 7.62184C29.7531 4.52794 26.3235 2.35556 22.4771 1.45793C18.6308 0.560311 14.5939 0.990237 11.0229 2.67781C7.45185 4.36537 4.55671 7.21133 2.80822 10.7529C1.05972 14.2945 0.560707 18.3234 1.39231 22.1846C2.22391 26.0458 4.33722 29.5121 7.38862 32.0199C10.44 34.5277 14.25 35.9295 18.1991 35.9974C22.1482 36.0653 26.0042 34.7953 29.14 32.3939M25.5 18.4989C25.5 22.3649 22.366 25.4989 18.5 25.4989C14.634 25.4989 11.5 22.3649 11.5 18.4989C11.5 14.6329 14.634 11.4989 18.5 11.4989C22.366 11.4989 25.5 14.6329 25.5 18.4989Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    type="text"
                    className="form-control input__modal"
                    id="inputUsername"
                    aria-describedby="emailHelp"
                    required
                    placeholder="Логин"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Введите номер телефона
                </label>
                <div className="block__input__modal">
                  <svg
                    className="icon__modal"
                    width="28"
                    height="28"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1V33M29 5L5 29M33 17H1M29 29L5 5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    type="password"
                    className="form-control input__modal"
                    id="inputPass"
                    aria-describedby="emailHelp"
                    required
                    placeholder="Пароль"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Введите номер телефона
                </label>
                <div className="block__input__modal">
                  <svg
                    className="icon__modal"
                    width="28"
                    height="28"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1V33M29 5L5 29M33 17H1M29 29L5 5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    type="password"
                    className="form-control input__modal"
                    id="inputPassConfirm"
                    aria-describedby="emailHelp"
                    required
                    placeholder="Подтвердите пароль"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
              <button type="submit" className="btn btn-warning">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
