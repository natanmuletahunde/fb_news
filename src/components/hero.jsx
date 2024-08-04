/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const hero = () => {
  const [hoveredPostId, setHoveredPostId] = useState(null);

  const newsPosts = [
    {
      id: 1,
      title: 'Lionel Messi Joins MLS Club in Historic Move',
      content: 'In a surprising turn of events, global superstar Lionel Messi has announced his decision to join an MLS club, marking a new chapter in his illustrious career.',
      image: './src/assets/images/lion.jpg', 
    },
    {
      id: 2,
      title: 'FIFA World Cup 2026 Host Cities Revealed',
      content: 'The 2026 FIFA World Cup, hosted jointly by the United States, Canada, and Mexico, has announced the host cities that will welcome the world\'s best teams and fans.',
      image: './src/assets/images/fifa.jpg', 
    },
    {
      id: 3,
      title: 'Premier League Transfer Window Heats Up',
      content: 'As the summer transfer window approaches, the world\'s top football clubs are making big-money moves to strengthen their squads for the upcoming season.',
      image: './src/assets/images/premier.jpg', 
    },
    {
      id: 4,
      title: 'Cristiano Ronaldo Announces Retirement',
      content: 'The legendary football player Cristiano Ronaldo has announced his retirement from professional football, marking the end of an era.',
      image: './src/assets/images/cr7.jpg', 
    },
    {
      id: 5,
      title: 'VAR Controversy Dominates Premier League Matches',
      content: 'The use of Video Assistant Referee (VAR) technology in the Premier League continues to spark debates and controversies among fans and experts.',
      image: './src/assets/images/var.jpg', 
    },
    {
      id: 6,
      title: 'Womens World Cup Breaks Attendance Records',
      content: 'The 2023 FIFA Womens World Cup has been a resounding success, with record-breaking attendance figures and increased global interest in the womens game.',
      image: './src/assets/images/womens.jpg', 
    },
    {
      id: 7,
      title: 'Lionel Messi Wins 8th Ballon d\'Or Award',
      content: 'In a testament to his enduring greatness, Lionel Messi has once again been awarded the prestigious Ballon d\'Or trophy, cementing his status as one of the all-time greats of the game.',
      image: './src/assets/images/messi_wins.jpg', 
    },
    {
      id: 8,
      title: 'Champions League Final Moved to New Venue',
      content: 'Due to unforeseen circumstances, the 2024 UEFA Champions League final has been relocated to a different stadium, causing a stir among football fans worldwide.',
      image: './src/assets/images/chimpion.jpg', 
    },
    {
      id: 9,
      title: 'Neymar Joins Saudi Arabian Club in Shock Move',
      content: 'In a surprising turn of events, Brazilian superstar Neymar has decided to leave his European club and join a prominent Saudi Arabian team, sparking discussions about the growing influence of the Middle Eastern football market.',
      image: './src/assets/images/neymar.jpg', 
    },
  ];

  const handleReadMore = (e, post) => {
    e.preventDefault();
    alert(`Redirecting to a detailed article about "${post.title}"`);
  };

  const handlePostHover = (postId) => {
    setHoveredPostId(postId);
  };

  const handlePostUnhover = () => {
    setHoveredPostId(null);
  };

  return (
    <div className="bg-white text-gray-800 py-20 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Football News Page</h1>
        <p className="text-lg mb-8">Stay up-to-date with the latest news and updates from the world of football.</p>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg ${
                hoveredPostId === post.id
                  ? 'bg-white text-gray-800 hover:bg-gray-800 hover:text-white'
                  : 'bg-gray-800 text-white hover:bg-white hover:text-gray-800'
              }`}
              onMouseEnter={() => handlePostHover(post.id)}
              onMouseLeave={handlePostUnhover}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="mb-4">
                  {hoveredPostId === post.id ? post.hoverContent : post.content}
                </p>
                <a
                  href="#"
                  onClick={(e) => handleReadMore(e, post)}
                  className="text-blue-500 hover:text-blue-400 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default hero;