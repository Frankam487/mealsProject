import { useState } from "react";
import Meals from "./Meals";

const Header = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <div className="header">
                <h1>React Cook</h1>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Taper le nom d'un aliment (en anglais)" />
            </div>
            <Meals inputValue={inputValue} />
        </>

    );
}


export default Header;