import styles from "./Header.module.scss";
import LOGOIMG from "../../../public/logo.png";
import BUYSVG from "../../../public/buy_icon.svg";
import Image from "next/image";

const dataHeader = {
  nav: [
    {
      id: "linkFirst",
      name: "Promocje",
      slug: "/promocje",
    },
    {
      id: "linkSecond",
      name: "Kody promocyjne",
      slug: "/kody-promocyjne",
    },
    {
      id: "linkThird",
      name: "Zakłady bez ryzyka",
      slug: "/zaklady-bez-ryzyka",
    },
    {
      id: "linkFourth",
      name: "Freebety",
      slug: "/freebety",
    },
    {
      id: "linkFifth",
      name: "Obstawianie zakładów",
      slug: "/obstawianie-zakladow",
    },
  ],
};

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <Image src={LOGOIMG} alt="logo bonuspedia" className={styles.logo} />

          <div className={styles.nav}>
            <ul className={styles.nav_list}>
              {dataHeader.nav.map((nav, index) => {
                return (
                  <li key={`${nav.id} + ${index}`}>
                    <a href={nav.slug}>{nav.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.buy_button}>
            <button>
              <Image
                src={BUYSVG}
                alt="obrazek koszyku na zakupy"
                className={styles.buy_icon}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
