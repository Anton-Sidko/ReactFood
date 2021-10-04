import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFilteredByCategory } from '../api';

import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';
import { UpButton } from '../components/UpButton';

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();
    const [limit, setLimit] = useState(15)


    function loadMore(limit) {
        let increaseLimit = limit + 6
        setLimit(increaseLimit)
    }

    useEffect(() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    },[name]);

    return (
        <>
            <button className="btn" onClick={goBack} >Go back</button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} limit={limit} loadMore={loadMore} />}
            {!meals.length ? null : (
                <UpButton />
            )}
        </>
    );
}

export {Category}