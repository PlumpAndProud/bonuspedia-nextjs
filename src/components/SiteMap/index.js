import style from "./SiteMap.module.scss";

const siteMapData = {
  sitemap: [
    {
      id: "siteMapFirst",
      title: "Zakłady bez ryzyka",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
    {
      id: "siteMapSecond",
      title: "Kody promocyjne",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
    {
      id: "siteMapThird",
      title: "Którego buka wybrać?",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
    {
      id: "siteMapFourth",
      title: "Encyklopedia bukmacherska",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
    {
      id: "siteMapFifth",
      title: "Zakłady sportowe",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
    {
      id: "siteMapSixth",
      title: "Freebety",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
    {
      id: "siteMapSeventh",
      title: "Rejestracja konta",
      description: "oferta na start",
      links: [
        {
          id: "linkFirst",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkSecond",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkThird",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFourth",
          name: "Lorem ipsum",
          slug: "/",
        },
        {
          id: "linkFifth",
          name: "Lorem ipsum",
          slug: "/",
        },
      ],
    },
  ],
};

export default function SiteMap() {
  return (
    <div className={style.site_map}>
      {siteMapData.sitemap.map((sitemap, index) => {
        return (
          <div className={style.map} key={`${sitemap.id} + ${index}`}>
            <div className={style.container}>
              <div className={style.title}>{sitemap.title}</div>
              <div className={style.description}>{sitemap.description}</div>
            </div>
            <ul className={style.links}>
              {sitemap.links.map((link, index) => {
                return (
                  <li key={`${link.id} + ${index}`}>
                    <a href={link.slug}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
