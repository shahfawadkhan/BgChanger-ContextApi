import React, { useContext }  from "react";
import ThemeContext  from "../contexts/theme1";

const Themetoggle = ()=>{
    const {theme , toggleTheme} = useContext(ThemeContext);
    return(
        <button
        className={theme === "light"? "bg-black text-white" : "bg-white text-black"}
        style={{padding : "10px" , borderRadius : "10px"}}
        onClick={toggleTheme}
        >
            Switch to {theme == "light" ? "Dark" : "light"} Theme
        </button>
    )
}

export default Themetoggle