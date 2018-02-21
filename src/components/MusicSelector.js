import React, { Component } from 'react';
var _ = require('lodash');

const MusicSelector = (props) => {

    function handleChange(e){
        props.onMusicSelected(e.target.value)
    }

    const genres = props.tracks.map(function (track) {
        return track.category.attributes.term
    })

    const options = _.uniq(genres).map((genre, index) =>{
        return<option key={index} value={genre}>{genre}</option>
    })
    return(
        <select id='genre-selector' onChange={handleChange} defaultValue='default'>
            <option disabled value='default'>Choose a genre...</option>
            <option value='all'>All</option>
            {_.uniq(options)}
        </select>
    )
}

export default MusicSelector;