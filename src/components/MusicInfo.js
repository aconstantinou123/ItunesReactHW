import React, { Component } from 'react'

class MusicInfo extends Component {
    render(){
        return(
            <div>
                <h4>{this.props.position}. {this.props.artist}</h4>
                <p>{this.props.song}</p>
                <img src={this.props.image} alt='band-logo'/>
                <p>{this.props.price}</p>
                <audio controls>
                    <source src={this.props.sample}/>
                </audio>
            </div>
        );
    }
}

export default MusicInfo;