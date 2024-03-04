import React, { useState } from "react";

const SearchForm = ({ value, onSearch }) => {
    const [searchInput, setSearchInput] = useState(value);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchInput);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Поиск:
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Найти</button>
        </form>
    );
};

export default SearchForm;
