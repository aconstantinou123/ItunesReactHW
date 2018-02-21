import React, { Component } from 'react';
import MusicInfo from './MusicInfo';

class MusicList extends Component {

    render() {
        if (!this.props.tracks) return null;
        const musicNodes = this.props.tracks.map((track, index) => {
            return(
            <MusicInfo key={index}
                       position={index+1}
                       artist={track['im:artist'].label}
                       song={track['im:name'].label}
                       image={track['im:image'][2].label}
                       sample={track.link[1].attributes.href}
                       price={track['im:price'].label}
            />

            )
        });

        return <div className='music-list'>{musicNodes}</div>
    }
}

export default MusicList;
