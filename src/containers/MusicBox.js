import React from 'react';
import MusicList from "../components/MusicList";
import MusicSelector from "../components/MusicSelector";


class MusicBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            music: [],
            filteredMusic: []
        }
        this.handleSelectedMusic = this.handleSelectedMusic.bind(this)
    }

    handleSelectedMusic(genre){
        console.log(genre)
        if (genre === 'all') {
            const unfilteredMusic = this.state.music;
            this.setState({
                filteredMusic: unfilteredMusic
            })
            return;
        }

        const selectedMusic = this.state.music.filter(track => track.category.attributes.term === genre)
        this.setState({
            filteredMusic: selectedMusic
        })
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () =>{
            if(xhr.status !== 200) return;
            var jsonString = xhr.responseText;
            var data = JSON.parse(jsonString);
            var top20 = data.feed.entry;
            this.setState({
                music: top20,
                filteredMusic: top20
            });
        })
        xhr.send();
    }

    render(){
        return(
            <div className='music-list'>
                <h2>Itunes Top 20</h2>
                <MusicSelector tracks={this.state.music} onMusicSelected={this.handleSelectedMusic}/>
                <MusicList tracks = {this.state.filteredMusic}/>
            </div>
        )
    }


}

export default MusicBox;