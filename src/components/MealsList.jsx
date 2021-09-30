import { Meal } from '../components/Meal';

function MealsList({meals = []}) {
    return (
        <div className="meal-list">
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal} />
            )).slice(0,15)}
        </div>
    );
}

export { MealsList }