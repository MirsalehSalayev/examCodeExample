import React, { useState, createContext } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const ProjectData = {
        handleSearch,
        search
    };

    return (
        <SearchContext.Provider value={ProjectData}>
            {children}
        </SearchContext.Provider>
    );
}