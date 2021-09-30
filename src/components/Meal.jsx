import { Link } from 'react-router-dom';

function Meal(props) {
    const {
        strMeal: name,
        strMealThumb: preview,
        idMeal
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={preview} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <Link to={`/recipe/${idMeal}`} className="btn">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal }