import React from 'react'
import photosnap from '../images/photosnap.svg';
import manage from '../images/manage.svg';
import account from '../images/account.svg';
import myhome from '../images/myhome.svg';
import loop from '../images/loop-studios.svg';
import face from '../images/faceit.svg';
import short from '../images/shortly.svg';
import insure from '../images/insure.svg';
import eyecam from '../images/eyecam-co.svg';
import airfilter from '../images/the-air-filter-company.svg';
import SearchButton from './SearchButton';

function findLogo(logo) {
    if (logo == './images/photosnap.svg') {
        return photosnap;
    }
    if (logo == './images/manage.svg') {
        return manage;
    }
    if (logo == './images/account.svg') {
        return account;
    }
    if (logo == './images/myhome.svg') {
        return myhome;
    }
    if (logo == './images/loop-studios.svg') {
        return loop;
    }
    if (logo == './images/faceit.svg') {
        return face;
    }
    if (logo == './images/shortly.svg') {
        return short;
    }
    if (logo == './images/insure.svg') {
        return insure;
    } if (logo == './images/eyecam-co.svg') {
        return eyecam;
    }
    if (logo == './images/the-air-filter-company.svg') {
        return airfilter;
    }
}

function Post({
    id,
    company,
    logo,
    news,
    featured,
    position,
    role,
    level,
    posted,
    contract,
    location,
    languages,
    tools,
    setSearchParam,
    searchParam,

}) {
    let isFeatured = '';
    if (featured == true) {
        isFeatured = 'Featured';
    }
    const staticLogos = findLogo(logo);

    const FilterByButtons = [];
    FilterByButtons.push(<SearchButton
        skill={role}
        setSearchParam={setSearchParam}
        array={false}
        type="role"
        searchParam={searchParam}
    />);
    FilterByButtons.push(<SearchButton
        skill={level}
        setSearchParam={setSearchParam}
        array={false}
        type="level"
        searchParam={searchParam}
    />);
    for (let i = 0; i < languages.length; i += 1) {
        FilterByButtons.push(<SearchButton
            skill={languages[i]}
            setSearchParam={setSearchParam}
            array
            type="languages"
            searchParam={searchParam}
        />);
    }
    for (let i = 0; i < tools.length; i += 1) {
        FilterByButtons.push(<SearchButton
            skill={tools[i]}
            setSearchParam={setSearchParam}
            array
            type="tools"
            searchParam={searchParam}
        />);
    }

    return (
        <div className={`Listings--Posts ${isFeatured}`}>
            <div className="Listings--Posts--Details">
                <img className="Listings--Posts--Details-Logo" src={staticLogos} alt="company logo" />
                <div className="Listings--Posts--Details-Info">
                    <div className="Listings--Posts--Details--Top">
                        <h2 className="Listings--Posts--Detials--Company">{company}</h2>
                        {news ? (
                            <div className="Listings--Post--Details--New-Bubble">
                                {' '}
                                <h2 className="Listings--Post--Details--New">NEW!</h2>
                                {' '}
                            </div>
                        ) : null}
                        {featured ? (
                            <div className="Listings--Post--Details--Featured-Bubble">
                                {' '}
                                <h2 className="Listings--Post--Details--Featured">FEATURED</h2>
                                {' '}
                            </div>
                        ) : null}
                    </div>
                    <div className="Listings--Posts--Details--Middle">
                        <h1 className="Listings--Posts--Detials--positions">{position}</h1>
                    </div>
                    <div className="Listings--Posts--Details--Bottom">
                        <h3 className="Listings--Posts--Detials--Time">
                            {posted}
                            {' '}
                        </h3>
                        {' '}
                        <span> · </span>
                        <h3 className="Listings--Post--Details-Contract">
                            {contract}
                            {' '}
                        </h3>
                        {' '}
                        <span> · </span>
                        <h3 className="Listings--Post--Details--Location">{location}</h3>
                    </div>
                </div>
            </div>
            <div className="Listings--Posts--Skills">
                {FilterByButtons}
            </div>
        </div>
    );
}

export default Post;
