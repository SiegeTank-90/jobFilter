import React from "react";
import DeleteSearch from "./DeleteSearch";
function ActiveSearch({ searchParam, setSearchParam }) {
    const SearchedParams = []
    let validateArray = []
    const keys = Object.keys(searchParam)
    for (let i = 0; i < Object.keys(searchParam).length; i += 1) {
        if (typeof searchParam[keys[i]] === 'string') {
            SearchedParams.push(<DeleteSearch
                skill={searchParam[keys[i]]}
                objectkey={keys[i]}
                setSearchParam={setSearchParam}
                searchParam={searchParam}
            />)
        } else if (searchParam[keys[i]].length > 0) {
            for (let x = 0; x < (searchParam[keys[i]].length); x += 1) {

                if (validateArray.includes(searchParam[keys[i]][x]) === false) {
                    validateArray.push(searchParam[keys[i]][x])
                    SearchedParams.push(<DeleteSearch
                        skill={searchParam[keys[i]][x]}
                        objectkey={keys[i]}
                        setSearchParam={setSearchParam}
                        searchParam={searchParam}
                    />)
                }
            }
        }
    }


    return (
        <div className="Listings--Searches">
            <div className="Listings--Seraches--SearchContainer">
                {SearchedParams}
            </div>
            <div className="Listings--Searches-ClearContainer">
                <button onClick={() => setSearchParam({})} className="Listings--Searches--ClearAll" >Clear</button>
            </div>
        </div>

    )
}

export default ActiveSearch