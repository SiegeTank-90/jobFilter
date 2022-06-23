import React from "react";
import closeIcon from '../images/icon-remove.svg';

function DeleteSearch({ skill, objectkey, setSearchParam, searchParam }) {

    function DeleteKey() {
        let searchParamClone = { ...searchParam }
        if (typeof searchParam[objectkey] === 'string') {
            delete searchParamClone[objectkey]
            setSearchParam(searchParamClone)
        } else {
            searchParamClone[objectkey] = searchParamClone[objectkey].filter((element) => element !== skill)
            setSearchParam(searchParamClone)
            if (searchParamClone[objectkey].length === 0) {
                delete searchParamClone[objectkey]
                setSearchParam(searchParamClone)
            }


        }
    }


    return (
        <div className="Listing--Searches--ClearSearch">
            <h2 className="Listing--Searches--ClearSearch--Name">{skill}</h2>
            <button onClick={DeleteKey} className="Listing--Searches--ClearSearch--Button"><img src={closeIcon} alt="close" /></button>
        </div>
    )
}
export default DeleteSearch