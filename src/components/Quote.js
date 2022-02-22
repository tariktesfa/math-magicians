import React from 'react';

const Quote = () => {
  const list = [
    'Strength does not come from physical capacity. It comes from an indomitable will.',
    'Nothing is impossible, the word itself says "I\'m possible"!',
    'The secret of getting ahead is getting started.',
    "I've missed more than 9,000 shots during my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    'The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.',
    'By seeking and blundering we learn.',
    'The price of anything is the amount of life you exchange for it.',
    'A change in perspective is worth 80 IQ points.',
  ];

  return (
    <section className="quote">
      <h2 data-testid="quote">{list[Math.floor(Math.random() * 8)]}</h2>
    </section>
  );
};

export default Quote;
