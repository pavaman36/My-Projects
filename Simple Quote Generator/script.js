let quote_btn = document.querySelector(".btn");
let quote = document.querySelector(".Quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: '"The soul is neither born, nor does it ever die; it is unborn, eternal, ever-existing, and primeval."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Whenever there is a decline in righteousness and an increase in unrighteousness, I manifest myself."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Abandon all varieties of duty and simply surrender unto Me; I shall liberate you from all sin, do not fear."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Perform your duty with a balanced mind, abandoning all attachment to success or failure."',
    person: 'Lord Krishna'
  },
  {
    quote: '"He who sees Me in all beings and all beings in Me is never lost to Me, nor am I ever lost to him."',
    person: 'Lord Krishna'
  },
  {
    quote: '"The mind is a powerful tool; for one who has conquered it, it is a friend; for one who has failed, it is an enemy."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Change is the law of the universe. You can be a millionaire, or a pauper in an instant."',
    person: 'Lord Krishna'
  },
  {
    quote: '"That person who gives up all material desires and lives free from greed, proprietorship, and egoism, attains perfect peace."',
    person: 'Lord Krishna'
  },
  {
    quote: '"One who performs his duty without attachment, surrendering the results unto the Supreme God, is not affected by sinful action, as the lotus leaf is untouched by water."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Better to fail in ones own duty than to succeed in the duty of another."',
    person: 'Lord Krishna'
  },
  {
    quote: '"One who sees inaction in action and action in inaction is wise among men."',
    person: 'Lord Krishna'
  },
  {
    quote: '"The wise see the same reality in a learned priest, a cow, an elephant, a dog, and a dog-eater."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Whatever happened, happened for good. Whatever is happening, is happening for good. Whatever will happen, will also happen for good."',
    person: 'Lord Krishna'
  },
  {
    quote: '"Time is the destroyer of all; no one can escape its consuming fire."',
    person: 'Bhishma'
  },
  {
    quote: '"What is the greatest wonder in this world? That, every single day, people die, yet the living think they are immortal."',
    person: 'Yudhishthira'
  },
  {
    quote: '"Man is the slave of money, but money is no man\'s slave."',
    person: 'Mahabharata'
  },
  {
    quote: '"Over-attachment for ones close relatives is simply born of ignorance. Every creature is born alone and dies alone."',
    person: 'Mahabharata'
  },
  {
    quote: '"A wise man laments neither for the living nor the dead. We are eternal souls, passing from body to body."',
    person: 'Mahabharata'
  },
  {
    quote: '"The mother is weightier than the earth; the father is higher than the heaven; the mind is fleeter than the wind; and our thoughts are more numerous than grass."',
    person: 'Yudhishthira'
  },
  {
    quote: '"Anger is an invincible enemy. Covetousness constitutes an incurable disease."',
    person: 'Yudhishthira'
  },
  {
    quote: '"Staying in one\'s own religion is asceticism; the restraint of the mind is of all restraints the true one."',
    person: 'Yudhishthira'
  },
  {
    quote: '"The friend of the exile is his companion; the friend of the householder is the wife; the friend of him that ails is the physician; and the friend of one about to die is charity."',
    person: 'Yudhishthira'
  },
  {
    quote: '"Real renunciation was something internal, not external. One who did his duty in a mood of detachment was the true renunciant."',
    person: 'Mahabharata'
  },
  {
    quote: '"Weapons can be extracted from the body, but a wordy dagger plunged deep into the heart is incapable of being taken out."',
    person: 'Mahabharata'
  },
  {
    quote: '"Truth alone is the highest dharma."',
    person: 'Lord Rama'
  },
  {
    quote: '"I never turn away from those who take refuge in me with a pure heart."',
    person: 'Lord Rama'
  },
  {
    quote: '"When I am sent on the Lord\'s work, I do not consider my own strength; I remember His name and all obstacles fall away."',
    person: 'Hanuman'
  },
  {
    quote: '"I cross the ocean of troubles by remembering Lord Rama; is there anything impossible when His grace is with me?"',
    person: 'Hanuman'
  },
  {
    quote: '"For the sake of my Lord, I regard even impossible tasks as easily accomplished."',
    person: 'Hanuman'
  },
  {
    quote: '"Where there is Rama, there is no fear; where there is fear, there is no Rama."',
    person: 'Tulsidas'
  },
  {
    quote: '"Your devotion is my greatest strength."',
    person: 'Lord Rama to Hanuman'
  },
  {
    quote: '"Beauty may leave the moon, Himalaya may become bereft of snow, the ocean may transgress its shores but I will never violate the promise given by my father."',
    person: 'Lord Rama'
  },
  {
    quote: '"Only the timid and the weak leave things to destiny, but the strong and the self-confident never bank on destiny or luck."',
    person: 'Lakshmana'
  },
  {
    quote: '"To be compassionate, kind, merciful and humane is a great virtue."',
    person: 'Sita'
  },
  {
    quote: '"Grief destroys one\'s courage. It destroys one\'s learning. It destroys one\'s everything. There is no enemy greater than grief."',
    person: 'Ramayana'
  },
  {
    quote: '"There is no deity more powerful than time."',
    person: 'Ramayana'
  },
  {
    quote: '"Those who have knowledge of dharma say that truth is the highest dharma."',
    person: 'Ramayana'
  },
  {
    quote: '"There are three all-powerful evils: lust, anger, and greed."',
    person: 'Ramayana'
  },
  {
    quote: '"Just as people are afraid of serpents they are afraid of people who utter lies. Truth controls this world and dharma is rooted in truth."',
    person: 'Lord Rama'
  },
  {
    quote: '"A Veena cannot exist without its strings. A chariot cannot exist without its wheels. Without her husband, a woman can never live happily even though she has a hundred sons."',
    person: 'Ramayana'
  },
  {
    quote: '"No burden is too heavy for providence, not even death."',
    person: 'Ramayana'
  },
  {
    quote: '"It is difficult for the children to repay the debt of what the mother and the father have done to bring them up."',
    person: 'Ramayana'
  },
  {
    quote: '"Meetings only end in separations. It is the law of nature. No one is capable of altering the course of Fate."',
    person: 'Lord Rama'
  },
  {
    quote: '"When I do not know who I am, I serve You; and when I do know who I am, You and I are One."',
    person: 'Hanuman'
  },
  {
    quote: '"The Ramayana\'s message is not that we passively give in to Destiny, but that we gallantly stick to Duty."',
    person: 'Wisdom from The Ramayana'
  },
  {
    quote: '"Destiny is not arbitrary or inimical; it is orderly and reactional. It gives us reactions to our own past actions."',
    person: 'Wisdom from The Ramayana'
  },
  {
    quote: '"Emotions are the ornaments of life. But we need to choose the emotions that bring out our higher side, not our lower side."',
    person: 'Wisdom from The Ramayana'
  },
  {
    quote: '"To remove thorns from the path of those who have filled our path with thorns — that is the summit of selfless love."',
    person: 'Wisdom from The Ramayana'
  },
  {
    quote: '"When everything in this world is temporary, why do you grieve for that which is lost?"',
    person: 'Mahabharata'
  },
  {
    quote: '"Pleasure from the senses seems like nectar at first, but it is bitter as poison in the end."',
    person: 'Mahabharata'
  }
];



quote_btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
