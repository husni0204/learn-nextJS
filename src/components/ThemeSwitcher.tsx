"use client"
import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
    const [Dark, setDark] = useState<boolean>(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme == "dark-mode") {
            setDark(true)
            document.body.classList.add("dark-mode")
        }
    }, []);

    useEffect(() => {
        if (Dark) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "");
        }
    })

    return (
        <button id={"theme-switcher"} className={"theme-switcher"} onClick={()=>setDark(!Dark)}>Ganti Theme</button>
    )
}

export default ThemeSwitcher;