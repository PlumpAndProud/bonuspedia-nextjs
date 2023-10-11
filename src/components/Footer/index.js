import style from "./Footer.module.scss";
import Image from "next/image";
import LOGO from "../../../public/logo.png";

const iconsData = {
  icon: [
    {
      id: "iconFirst",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconSecond",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconThird",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconFourth",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconFifth",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconSixth",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconSeventh",
      path: "/icon.png",
      slug: "/",
    },
    {
      id: "iconEighth",
      path: "/icon.png",
      slug: "/",
    },
  ],
};

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image src={LOGO} alt="logo bonuspedii" />
        </div>
        <div className={style.nav}>
          <ul>
            <li>Regulamin serwisu</li>
            <li>Polityka prywatności</li>
            <li>O serwisie</li>
            <li>Kontakt</li>
            <li>Polecane buki:</li>
          </ul>
        </div>
        <div className={style.icons}>
          {iconsData.icon.map((icon, index) => {
            return (
              <a href={icon.slug} key={`${icon.id} + ${index}`}>
                <Image
                  src={icon.path}
                  alt="ikona bukmachera"
                  width="30"
                  height="30"
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className={style.disclaimer}>
        <p className={style.rights}>All Rights Reserved © 2023</p>
        <p className={style.legal_issues}>
          Korzystaj z usług tylko legalnych bukmacherów, posiadających aktywną
          licencję polskiego Ministerstwa Finansów. Granie u operatorów bez
          koncesji grozi konsekwencjami prawnymi. Masz problem z hazardem? Nie
          graj i udaj się po pomoc do specjalistów! Przeczytaj: uzależnienie od
          hazardu.
        </p>
      </div>
    </div>
  );
}
