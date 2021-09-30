import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFilteredByCategory } from '../api';

import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    },[name]);

    return (
        <>
            <button className="btn" onClick={goBack} >Go back</button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
}

export {Category}