import React from 'react';
import {Song} from '../../interfaces/song';
import './musicplayer.css';
import AudioPlayer from './audioplayer';


interface MusicPlayerProps {

    song : Song;
    onPrevious: () => void;
    onNext: () => void; 

}

const MusicPlayer : React.FC <MusicPlayerProps> = ({song, onPrevious, onNext}) => {

    return (
        <div className="MPContainer">
            <img src={song.cover} alt={song.name} className="song-image" />
            <h3 className="song-artist">{song.artist}</h3>
            <AudioPlayer audioSource={song.audio} onPrevious={onPrevious} onNext={onNext} />
        </div>
    );

}




export default MusicPlayer;