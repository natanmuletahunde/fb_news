/* eslint-disable no-unused-vars */
import React from 'react';
import newsLogo from '../assets/images/newslogo.jpg';

const Nav = () => {
  return (
    <div className="flex items-center justify-between p-6 lg:flex-row text-white bg-gray-800">
      <div>
        <img src={newsLogo} alt="News Logo" className="h-16 w-16 rounded-full shadow-lg" />
      </div>
      <div className="text-center flex-grow">
        <h1 className="text-4xl font-bold">Football News</h1>
      </div>
      <div className="space-x-4">
        <a href="https://www.premierleague.com/clubs" className="hover:text-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">Favourite Teams</a>
        <a href="https://www.bbc.com/sport/football" className="hover:text-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">BBC Football</a>
        <a href="https://en.wikipedia.org/wiki/List_of_stadiums_by_capacity" className="hover:text-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">Stadium</a>
        <a href="https://www.efl.com/clubs-and-competitions/sky-bet-championship/" className="hover:text-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">Championship</a>
      </div>
    </div>
  );
};

export default Nav;
