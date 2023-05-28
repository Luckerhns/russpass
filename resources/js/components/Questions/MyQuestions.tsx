import React, { FC, useEffect } from "react";
import noSvg from "../../styles/images/quests/no.svg";
import yesSvg from "../../styles/images/quests/yes.svg";
import agentSvg from "../../styles/images/quests/Агент иконка.svg";
import agentBloomedSvg from "../../styles/images/quests/Агент покрасневшая.svg";
import step1 from "../../styles/images/quests/step1bg.png";
import step2 from "../../styles/images/quests/step2bg.png";
import step3 from "../../styles/images/quests/step3bg.png";
import step4 from "../../styles/images/quests/step4bg.png";
import step5 from "../../styles/images/quests/step5bg.png";
import step6 from "../../styles/images/quests/step6bg.png";
import step7 from "../../styles/images/quests/step7bg.png";
import step8 from "../../styles/images/quests/step8bg.png";
import step9 from "../../styles/images/quests/step9bg.png";
import step10 from "../../styles/images/quests/step10bg.png";
import "./Questions.css";
interface IVisible {
  isVisible: boolean;
}

const MyQuestions: FC<IVisible> = ({ isVisible }) => {
  let counter = 1;
  const btn = document.querySelectorAll(
    `.quests__cards > .steps__quests > .choice__buttons  > button`
  );
  console.log(btn);
  btn.forEach((e) => {
    e.addEventListener("click", function func() {
      console.log("gg");
      const step = document.querySelector(`.ques__card_${counter + 1}`) as HTMLDivElement
      const prevStep = document.querySelector(`.ques__card_${counter}`) as HTMLDivElement
      const range = document.querySelector(`.ques__card_${counter} > .progress__bar > .progress__range`) as HTMLDivElement
      range.style.width = `${10 * counter}%`
      step.classList.toggle('active')
      setTimeout(() => {
        prevStep.style.display = 'none'
      }, 1000)
      prevStep.classList.toggle('active')
      counter++;
    });
  });
  useEffect(() => {
    let step = document.querySelector(`.ques__card_${counter}`) as HTMLDivElement
    step.classList.toggle('active')
  }, [])
  return (
    <div
      className="container__card__image"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="slider__cards">
        <div className="ques__card_1 quests__cards">
          <div className="topic__card">
            Наш виртуальный ассистент Юлия хочет задать Вам несколько вопросов
          </div>
          <div className="progress__bar">
            <div className="progress__text">1/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">Шаг 1</li>
              <li className="steps__list">Шаг 2</li>
              <li className="steps__list">Шаг 3</li>
            </ul>
            <div className="quest__in">Вам нравится солнечная погода?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step1} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_2 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">2/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">Шаг 1</li>
              <li className="steps__list">Шаг 2</li>
              <li className="steps__list">Шаг 3</li>
            </ul>
            <div className="quest__in">Вы любите горы?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step2} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_3 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">3/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">Шаг 1</li>
              <li className="steps__list">Шаг 2</li>
              <li className="steps__list">Шаг 3</li>
            </ul>
            <div className="quest__in">Вам нравится посещать музеи?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step3} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_4 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">4/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 3</span>
              </li>
              <li className="steps__list">Шаг 4</li>
              <li className="steps__list">Шаг 5</li>
            </ul>
            <div className="quest__in">Вы любите экскурсии?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step4} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_5 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">5/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 4</span>
              </li>
              <li className="steps__list">Шаг 5</li>
              <li className="steps__list">Шаг 6</li>
            </ul>
            <div className="quest__in">Вам нравится природа?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step5} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_6 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">6/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 5</span>
              </li>
              <li className="steps__list">Шаг 6</li>
              <li className="steps__list">Шаг 7</li>
            </ul>
            <div className="quest__in">
              Хотели бы вы остановиться в люкс-отелях <br /> или предпочитаете
              более скромное жильё?
            </div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step6} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_7 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">7/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 6</span>
              </li>
              <li className="steps__list">Шаг 7</li>
              <li className="steps__list">Шаг 8</li>
            </ul>
            <div className="quest__in">Вам нравится искусство?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step7} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_8 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">8/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 7</span>
              </li>
              <li className="steps__list">Шаг 8</li>
              <li className="steps__list">Шаг 9</li>
            </ul>
            <div className="quest__in">Вы любите далекие поездки?</div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step8} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_9 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">9/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 7</span>
              </li>
              <li className="steps__list">Шаг 9</li>
              <li className="steps__list">Шаг 10</li>
            </ul>
            <div className="quest__in">
              Вам важно наличие <br /> интернета при поездке?
            </div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step9} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_10 quests__cards">
          <div className="progress__bar">
            <div className="progress__text">10/10</div>
            <div className="progress__range"></div>
          </div>
          <div className="steps__quests">
            <ul className="steps__inside d-flex gap-3 justify-content-center">
              <li className="steps__list">
                <span>Шаг 8</span>
              </li>
              <li className="steps__list">Шаг 9</li>
              <li className="steps__list">Шаг 10</li>
            </ul>
            <div className="quest__in">
              У Вас есть медицинские <br /> противопоказания или ОВЗ?
            </div>
            <div className="choice__buttons d-flex justify-content-center gap-5">
              <button className="yes">
                Да <img src={yesSvg} alt="" />
              </button>
              <button className="no">
                Нет <img src={noSvg} alt="" />
              </button>
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
            <img src={step10} alt="" className="bg__main" />
          </div>
        </div>
        <div className="ques__card_11 quests__cards">
          <div className="topic__card">
            <h2>Отлично!</h2>
          </div>
          <div className="progress__bar">
            <div className="progress__inside__full"></div>
          </div>
          <div className="steps__quests">
            <div className="quest__in">Ваша анкета обрабатывается</div>
            <div className="quest__in">
              Мы учтем Ваши интересы и составим подходящий для Вас тур
            </div>
          </div>
          <div className="bg__items">
            <img src={agentSvg} alt="" className="agent__item" />
            <img src={agentBloomedSvg} alt="" className="agent__item2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQuestions;
