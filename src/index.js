import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

const Data = {
  movies: [
    {
      id: 1,
      imageURL: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`
    },
    {
      id: 2,
      imageURL: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`
    },
    {
      id: 3,
      imageURL: `img/macbeth.jpg`,
      title: `Macbeth`
    },
    {
      id: 4,
      imageURL: `img/aviator.jpg`,
      title: `Aviator`
    },
    {
      id: 5,
      imageURL: `img/we-need-to-talk-about-kevin.jpg`,
      title: `We need to talk about Kevin`
    },
    {
      id: 6,
      imageURL: `img/what-we-do-in-the-shadows.jpg`,
      title: `What We Do in the Shadows`
    },
    {
      id: 7,
      imageURL: `img/revenant.jpg`,
      title: `Revenant`
    },
    {
      id: 8,
      imageURL: `img/johnny-english.jpg`,
      title: `Johnny English`
    },
    {
      id: 9,
      imageURL: `img/shutter-island.jpg`,
      title: `Shutter Island`
    },
    {
      id: 10,
      imageURL: `img/pulp-fiction.jpg`,
      title: `Pulp Fiction`
    },
    {
      id: 11,
      imageURL: `img/no-country-for-old-men.jpg`,
      title: `No Country for Old Men`
    },
    {
      id: 12,
      imageURL: `img/snatch.jpg`,
      title: `Snatch`
    },
    {
      id: 13,
      imageURL: `img/moonrise-kingdom.jpg`,
      title: `Moonrise Kingdom`
    },
    {
      id: 14,
      imageURL: `img/seven-years-in-tibet.jpg`,
      title: `Seven Years in Tibet`
    },
    {
      id: 15,
      imageURL: `img/midnight-special.jpg`,
      title: `Midnight Special`
    },
    {
      id: 16,
      imageURL: `img/war-of-the-worlds.jpg`,
      title: `War of the Worlds`
    },
    {
      id: 17,
      imageURL: `img/dardjeeling-limited.jpg`,
      title: `Dardjeeling Limited`
    },
    {
      id: 18,
      imageURL: `img/orlando.jpg`,
      title: `Orlando`
    },
    {
      id: 19,
      imageURL: `img/mindhunter.jpg`,
      title: `Mindhunter`
    },
    {
      id: 20,
      imageURL: `img/midnight-special.jpg`,
      title: `Midnight Special`
    }
  ],
  promo: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  }
};

ReactDOM.render(
    <App movieList={Data.movies} promoMovie={Data.promo} films={films} />,
    document.querySelector(`#root`)
);
