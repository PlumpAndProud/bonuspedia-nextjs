import Image from "next/image";
import style from "./RecieveBonus.module.scss";

const dataCode = {
  codes: [
    {
      id: "codeFirst",
      text: "Najlepszy bukmacher w kategorii",
      title: "Kody promocyjne",
      slug: "/",
      logo: "/superbet_logo.png",
      logowidth: "166",
      logoheight: "28",
      bgcolor: "#EA060A",
    },
    {
      id: "codeFirst",
      text: "Najlepszy bukmacher w kategorii",
      title: "Kody promocyjne",
      slug: "/",
      logo: "/fortuna_logo.png",
      logowidth: "209",
      logoheight: "51",
      bgcolor: "#FFDB01",
    },
    {
      id: "codeFirst",
      text: "Najlepszy bukmacher w kategorii",
      title: "Kody promocyjne",
      slug: "/",
      logo: "/fuksiarz_logo.png",
      logowidth: "164",
      logoheight: "35",
      bgcolor: "#C62828",
    },
    {
      id: "codeFirst",
      text: "Najlepszy bukmacher w kategorii",
      title: "Kody promocyjne",
      slug: "/",
      logo: "/forbet_logo.png",
      logowidth: "120",
      logoheight: "30",
      bgcolor: "#16A728",
    },
  ],
};

export default function RecieveBonus() {
  return (
    <div className={style.recieve_code_block}>
      <div className={style.text_block}>
        <p>Wiesz, który bonus chcesz wybrać</p>
        <h3>Szukasz najlepszego bukmachera?</h3>
      </div>
      <div className={style.codes}>
        {dataCode.codes.map((code, index) => {
          return (
            <div className={style.code} key={`${code.id} + ${index}`}>
              <div className={style.info}>
                <div className={style.text_container}>
                  <p className={style.text}>{code.text}</p>
                  <h4 className={style.title}>{code.title}</h4>
                </div>
                <button className={style.recieve}>Odbierz bonus</button>
              </div>
              <div
                className={style.image_background}
                style={{ ["background-color"]: code.bgcolor }}
              >
                <Image
                  src={code.logo}
                  width={code.logowidth}
                  height={code.logoheight}
                  alt="przycisk odbierz kod"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
