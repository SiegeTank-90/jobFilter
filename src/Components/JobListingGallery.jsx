import React, { useState, useEffect } from "react";
import Data from '../data.json'
import Post from '../Components/Post'
import ActiveSearch from "../Components/ActiveSearch";

function JobListingGallery() {

    const [searchParam, setSearchParam] = useState({});
    const [qualifiedPost, setQualifiedPost] = useState([]);
    let searchParamisEmpty = false
    if (Object.keys(searchParam).length == 0) {
        searchParamisEmpty = true
    }

    function results(post) {
        let passedParams = 0
        if (searchParam.company === post.company) {
            passedParams += 1;
        }
        if (searchParam.new === post.new) {
            passedParams += 1;
        }
        if (searchParam.featured === post.featured) {
            passedParams += 1;
        }
        if (searchParam.role === post.role) {
            passedParams += 1;
        }
        if (searchParam.new === post.new) {
            passedParams += 1;
        }
        if (searchParam.level === post.level) {
            passedParams += 1;
        }
        if (searchParam.contract === post.contract) {
            passedParams += 1;
        }
        if (searchParam.location === post.location) {
            passedParams += 1;
        }
        if (searchParam.languages !== undefined) {

            let languagesFound = 0;
            for (let i = 0; i < searchParam.languages.length; i += 1) {
                if (post.languages.find((element) => element == searchParam.languages[i]) !== undefined) {
                    languagesFound += 1;
                }
            }
            if (languagesFound == searchParam.languages.length) {
                passedParams += 1;
            }
        }
        if (searchParam.tools !== undefined) {
            let toolsFound = 0;
            for (let i = 0; i < searchParam.tools.length; i += 1) {
                if (post.tools.find((element) => element == searchParam.tools[i]) !== undefined) {
                    toolsFound += 1;
                }
            }
            if (toolsFound == searchParam.tools.length) {
                passedParams += 1;
            }
        }


        // if all tested parameters are true
        if (Object.keys(searchParam).length === passedParams) {
            return true
        }

    }


    useEffect(() => {
        let qualifiedPostClone = [];
        Data.filter(results).forEach((post) =>
            qualifiedPostClone.push(<Post
                id={post.id}
                company={post.company}
                logo={post.logo}
                news={post.new}
                featured={post.featured}
                position={post.position}
                role={post.role}
                level={post.level}
                posted={post.postedAt}
                contract={post.contract}
                location={post.location}
                languages={post.languages}
                tools={post.tools}
                setSearchParam={setSearchParam}
                searchParam={searchParam} />
            ))
        setQualifiedPost(qualifiedPostClone)
    }, [searchParam])

    return (
        <div className='Listings'>
            {searchParamisEmpty ? null : <ActiveSearch searchParam={searchParam} setSearchParam={setSearchParam} />}
            {qualifiedPost}
        </div>
    )
}

export default JobListingGallery