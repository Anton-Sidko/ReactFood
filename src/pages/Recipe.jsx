import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';

import { Preloader } from '../components/Preloader';

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const { goBack } = useHistory();

    const {
        idMeal,
        strMeal: title,
        strCategory: category,
        strArea: area,
        strInstructions: mealRecipe,
        strMealThumb: preview,
        strYoutube
    } = recipe;

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id]);

    return (
        <>
            {!idMeal ? <Preloader /> : (
                <div className="recipe">
                    <img src={preview} alt={title} />
                    <h1>{title}</h1>
                    <div className="short-info">
                        <h6>Category: {category}</h6>
                        {area ? <h6>Area: {area}</h6> : null}
                    </div>
                    <p>{mealRecipe}</p>

                    <table className="centered striped">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>
                    </table>

                    {strYoutube ? (
                        <div className="row">
                            <h5>Video recipe</h5>
                            <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title={idMeal} allowFullScreen></iframe>
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={goBack}>Go back</button>
        </>
    )
}

export { Recipe }