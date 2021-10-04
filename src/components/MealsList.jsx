import { Meal } from '../components/Meal';

function MealsList(props) {
    const {
        meals,
        limit,
        loadMore
    } = props;

    return (
        <>
        <div className="meal-list">
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal} />
            )).slice(0, limit)}
        </div>
        { meals.length > limit ? (
            <div className="more-btn-wrap">
                <i className="large material-icons more-btn" onClick={() => loadMore(limit)}>autorenew</i>
                <span>Load more</span>
            </div>
            ) : null
        }
        </>
    );
}

export { MealsList }