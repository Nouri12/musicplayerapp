import React, { useEffect } from 'react';
import './sidebar.css'; 
import {Song} from '../../interfaces/song';

interface SidebarProps {
  title: string;
  songs: Song[];
  selectedSong: Song;
  setSelectedSong: (song : Song) => void;
}

const SideBar: React.FC<SidebarProps> = ({ title, songs, selectedSong, setSelectedSong }) => {

  useEffect(() => {
    if (songs.length > 0 && !selectedSong) {
      setSelectedSong(songs[0]);
    }
  }, [songs, selectedSong]);

  const handleItemClick = (song: Song) => {
    setSelectedSong(song);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">{title}</h2>
      <ul className="sidebar-list">
        {songs.map((song, index) => (
          <li
            key={index}
            className={`sidebar-item ${selectedSong?.name === song.name ? 'selected' : ''}`}
            onClick={() => handleItemClick(song)}
          >
            <img src={song.cover} alt={song.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-title">{song.name}</h3>
              <p className="item-subtitle">{song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
