import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';

import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setLoading(false);
        })
    }, [])


    return (
        <>
            {loading ? <Preloader /> : (
                <CategoryList catalog={catalog}/>
            )}
        </>
    );
}

export { Home }