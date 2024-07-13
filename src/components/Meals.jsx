import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://themealdb.com/api/json/v1/1/search.php?s=").then((res) => setData(res.data.meals))
    }, [])

    return (
        <div className="meals">
            <ul>

                {
                    data.map((meal) => (
                        <Card meal={meal} key={meal.idMeal} />
                    ))
                }
            </ul>

        </div>
    );
}

export default Meals;