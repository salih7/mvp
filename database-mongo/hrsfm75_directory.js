var collections = require('../database-mongo');

collections.insertMany(
  [{ name: "Agnes Chu", email: "agnes.p.chu@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "https://lh5.googleusercontent.com/HxDIGpNCwJUhga9AH2CaybqYtiNQ9BVyAcIloZRBaR51bWh-DuFxj9XRjdrS6L-6_N1BkKW_tj6m_Oo=w960-h939-rw" },
  { name: "Airyque Ervin", email: "airyque@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl:  "https://lh6.googleusercontent.com/eiw8loeSkHe33swsjNk0u7q77AGkmeQGOoT5B5V-6zd6mOVxJCgAHrZ5Qe1-J1mQM6p9tNliKAimpG0=w960-h939-rw" },
  { name: "Alan Zheng", email: "aszheng12@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "https://lh5.googleusercontent.com/7Ru7QUMUSEtZDHFg6tpWd3i5QFVkHv4RhTMVJldklJQp7pmMw8giT7lfDVmItRBZDFzTKJWdXp0H498=w960-h939-rw" },
  { name: "Alex Liang", email: "axl.lgn@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "https://lh6.googleusercontent.com/P0NalRP56JmV18VhZz0VRkrQ4k6i60GWr0Tj8OptSyNvZ6kaV6TLayX728Zi1pov5x2Fge7coAFlxaM=w960-h939-rw" },
  { name: "Ali Elgiadi", email: "a.elgiadi92@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "https://lh5.googleusercontent.com/UIof3aNRZokimMEEe1pEuY6J9TYn4QWgDSHgD5221fgF7aYDheObU5kex5KKBRi0Kkne2Y7jSFl4g3w=w960-h939-rw" },
  { name: "Anthony Wong", email: "anthonywong12@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "https://lh3.googleusercontent.com/tjFLGYwxpvAQcdaQVnTNxN9lnzcUcrVVO-28ugmTNlgl8yt321RaGaGWg-UbMgSWngk0JtGd06nsUi8=w960-h939-rw" },
  { name: "Charles Kim", email: "cjkim0119@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Chris Keating", email: "ckeating.nh@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "David Gould", email: "david.gould112@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Douglas Cox", email: "dougecox@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Drew Bedford-Hart", email: "abedfordhart@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Gunpreet Singh", email: "gunpreet@outlook.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "He Liu", email: "lkang415@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jack Ren", email: "jackren1991@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jeffrey Chen", email: "jeffreychen41@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jim Lee", email: "jimleeisme@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Joneric Escobedo", email: "jonericescobedo@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Joseph Zizzo", email: "rich@richwerden@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Kara Marnell", email: "kmarnell@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Kriz Cortez", email: "kriz@krizcortes.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Lavanya Chandrashekara", email: "lavanya.ammic@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Michael Sermersheim", email: "m.sermersheim@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Ming Feng", email: "kakacuna@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Nick Anderson", email: "nicasioca@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Oliver Ullman", email: "oliverullman@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Preda Anuvatnujotikul", email: "preda.anu@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Rajas Kale", email: "rajas.p.kale@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Rich Werden", email: "zizzo.joseph.k@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Salih Abuelyaman", email: "salih7@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "https://lh3.googleusercontent.com/loMZ9FPPu2i8SIjwOOQtSSO70tEGuNavWNyWuAcEDMsiID92mWKmo78Zd-dvFOXM19AwXfGTYW3yjYQ=w960-h939-rw" },
  { name: "Steven Kim", email: "emailstevenkim@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Tom Dickson", email: "salih7@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Tyler Pate", email: "tylerrosspate@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Vincent Van Buskirk", email: "vvanbuskirk805@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" }],
  function(err, docs) {
    if(err) {
      console.log(err);
    } else {
      console.log('Successful batch insert!!!!!!! ', docs.length, ' items!!!');
    }
  }
);
