import React from "react";

function SearchButton({ skill, setSearchParam, array, type, searchParam }) {

    function handleClick() {
        if (array == false) {
            setSearchParam({ ...searchParam, [type]: skill })
        } else {
            if (searchParam[type] == undefined) {
                setSearchParam({ ...searchParam, [type]: [skill] })
            } else {
                setSearchParam({ ...searchParam, [type]: [...searchParam[type], skill] })
            }
        }
    }






    return (
        <button onClick={handleClick} className="Listings--Posts--Skills--Search-Button">
            <h2 className="Listings--Posts--SkilsS--Skill">{skill}</h2>
        </button>
    )
}

export default SearchButton
