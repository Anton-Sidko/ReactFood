import { useState } from 'react';

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12 search-line">
                <input
                    type="search"
                    id="serach-field"
                    placeholder="Search category"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className="btn btn-search"
                    onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}

export { Search };