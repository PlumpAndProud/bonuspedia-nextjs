'use client'

import styles from './Header.module.css'
import Image from 'next/image'
import SVGIMG from '../../../public/menu.svg'

const dataHeader = {
    "nav": [
        {
            "id": "linkFirst",
            "name": "Kalendarz promocji",
            "slug": "/Calendar",

        },
        {
            "id": "linkSecond",
            "name": "Konfigurator bukmachera",
            "slug": "/Configure"

        },
        {
            "id": "linkThird",
            "name": "Poradniki",
            "slug": "/Tutorials"

        },
        {
            "id": "linkFourth",
            "name": "Typy",
            "slug": "/Types"

        }
    ]
}

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={[styles.wrapper_row, styles.wrapper_header].join(" ")}>

                    <div className={styles.header_logo}>bonuspedia</div>

                    <div className={styles.header_nav_mobile}>
                        <Image
                            src={SVGIMG}
                            alt="lista do rozwiniecia z opcjami"
                        />
                    </div>
                    <ul className={styles.header_nav}>
                        {
                            dataHeader.nav.map((nav, index) => {
                                return (
                                    <li className={styles.header_nav_option} key={`${nav.id} + ${index}`}>
                                        <a href={nav.slug}>
                                            {nav.name}
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>

                    <button className={styles.header_register_button} onClick={() => {
                        alert("to bedzie rejestracja")
                    }}>Zarejestruj się</button>
                </div>
            </header>
        </>
    )
}