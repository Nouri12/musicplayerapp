import React, {useState}  from 'react';
import SideBar from '../components/sidebar/sidebar';
import MusicPlayer from '../components/musicplayer/musicplayer';
import {Song} from '../interfaces/song';
import Songs from '../assets/data/data';
import './mainpage.css';

const MainPage: React.FC<{}> = () => {

    const [selectedSong, setSelectedSong] = useState<Song>(Songs[0]);

    const onPrevious = () => {
        const currentSongIndex = Songs.findIndex((item) => item.audio === selectedSong.audio);
        if(currentSongIndex <= 0) {
            alert("This is the first song !!");
            return;
        } 

        setSelectedSong(Songs[currentSongIndex - 1]);

    }

    const onNext = () => {

        const currentSongIndex = Songs.findIndex((item) => item.audio === selectedSong.audio);
        if(currentSongIndex >= (Songs.length - 1)) {
            alert("This is the last song !!");
            return;
        } 

        setSelectedSong(Songs[currentSongIndex + 1]);

    }

    return( 
        <div className="sidebar-container">
            <SideBar 
                title="Library" 
                songs={Songs} 
                selectedSong={selectedSong} 
                setSelectedSong={setSelectedSong} 
                />
            <MusicPlayer song={selectedSong} onPrevious={onPrevious} onNext={onNext} />
        </div>
    )

}



export default MainPage;