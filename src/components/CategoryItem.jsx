import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const {
        strCategory: name,
        strCategoryThumb : preview,
        strCategoryDescription: description
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={preview} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${name}`} className="btn">
                    Watch category
                </Link>
            </div>
        </div>
    )
}

export { CategoryItem }