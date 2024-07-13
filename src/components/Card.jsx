const Card = ({meal}) => {
    console.log(meal);
    return ( 
        <div className="card">
            <div className="content-card">
                <h3>{meal.strCategory}</h3>
                <img src={meal.strMealThumb} alt={`Photo de ` + meal.strTags} />
                <p>{meal.strInstructions}</p>
            </div>
        </div>
     );
}
 
export default Card;