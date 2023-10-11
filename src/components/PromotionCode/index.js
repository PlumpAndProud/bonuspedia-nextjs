import style from "./PromotionCode.module.scss";
import ARROWSVG from "../../../public/arrow_right.svg";
import Image from "next/image";

const dataCode = {
  code: [
    {
      id: "codeFirst",
      name: "Kody promocyjne",
      text: "dla aktywnych graczy",
      slug: "/",
    },
    {
      id: "codeSecond",
      name: "Zakłady bez ryzyka",
      text: "dla nowych graczy",
      slug: "/",
    },
    {
      id: "codeThrid",
      name: "Freebety",
      text: "darmowe zakłady",
      slug: "/",
    },
    {
      id: "codeFourth",
      name: "Bukmacherzy",
      text: " najlepsi bukmacherzy",
      slug: "/",
    },
    {
      id: "codeFifth",
      name: "Obstawianie",
      text: "pigulka wiedzy dla kazdego",
      slug: "/",
    },
  ],
};

export default function PromotionCode() {
  return (
    <div className={style.promotion_block}>
      <div className={style.content}>
        <div className={style.discover}>
          <h1>Bonusy bukmacherskie</h1>
          <p>
            Dlaczego Bonuspedia? Bo tak jak encyklopedia jesteśmy źródłem wiedzy
            o promocjach bukmacherskich. Chcemy by gracz korzystający z naszych
            informacji i kodów skutecznie wprowadzał w życie nasze instrukcje,
            które pozwolą zyskać bonusy na zakłady online. Nasz zespół
            kompletuje wszystkie bonusy w jednym miejscu, tak byś ty mógł wybrać
            najlepszą ofertę.
          </p>
        </div>

        <div className={style.codes}>
          {dataCode.code.map((code, index) => {
            return (
              <div className={style.code} key="index">
                <div className={style.wrapper}>
                  <h2 className={style.name}>{code.name}</h2>
                  <span className={style.text}>{code.text}</span>
                </div>
                <div className={style.reveal}>
                  <button>
                    <Image src={ARROWSVG} alt="strzalka do rozwiniecia kodu" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
