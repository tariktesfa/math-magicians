import React from 'react';

const Quote = () => {
  const list = [
    'Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein, German theoretical physicist',
    'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. — Shakuntala Devi, Indian writer and mental calculator',
    'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics. — Katherine Johnson, African-American mathematician',
    'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality. — Richard Courant, German-American mathematician',
    'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. — Albert Einstein',
    'Mathematics are the result of mysterious powers which no one understands, and which the unconscious recognition of beauty must play an important part. Out of an infinity of designs a mathematician chooses one pattern for beauty’s sake and pulls it down to earth. — Marston Morse, American mathematician',
    'Somehow it’s okay for people to chuckle about not being good at math. Yet, if I said “I never learned to read,” they’d say I was an illiterate dolt. — Neil deGrasse Tyson, American astrophysicist and author',
    'Mathematics has beauty and romance. It’s not a boring place to be, the mathematical world. It’s an extraordinary place; it’s worth spending time there. — Marcus du Sautoy, British mathematician',
    'Many who have had an opportunity of knowing any more about mathematics confuse it with arithmetic, and consider it an arid science. In reality, however, it is a science which requires a great amount of imagination. — Sofia Kovalevskaya',
  ];

  return (
    <section className="quote">
      <p data-testid="quote">{list[Math.floor(Math.random() * 8)]}</p>
    </section>
  );
};

export default Quote;
