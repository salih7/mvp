var collections = require('../database-mongo');

collections.insertMany(
  [{ name: "Agnes Chu", email: "agnes.p.chu@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Airyque Ervin", email: "airyque@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Alan Zheng", email: "aszheng12@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Alex Liang", email: "axl.lgn@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Ali Elgiadi", email: "a.elgiadi92@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Anthony Wong", email: "anthonywong12@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Bill Beedle", email: "ebeedle@ucla.edu", location: "San Francisco", work: "Hack Reactor", photoUrl: ""},
  { name: "Charles Kim", email: "cjkim0119@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Chris Keating", email: "ckeating.nh@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "David Gould", email: "david.gould112@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Doug Cox", email: "dougecox@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Drew Bedford-Hart", email: "abedfordhart@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Gunpreet Singh", email: "gunpreet@outlook.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "He Liu", email: "lkang415@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jack Ren", email: "jackren1991@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jeff Chen", email: "jeffreychen41@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jim Lee", email: "jimleeisme@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Jon Eric Escobedo", email: "jonericescobedo@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Joe Zizzo", email: "zizzo.joseph.k@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Kara Marnell", email: "kmarnell@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Kriz Cortez", email: "kriz@krizcortes.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Lavanya Ammi Chandrashekara", email: "lavanya.ammic@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Michael Sermersheim", email: "m.sermersheim@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Ming Feng", email: "kakacuna@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Nick Anderson", email: "nicasioca@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Oliver Ullman", email: "oliverullman@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Preda Wen", email: "preda.anu@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Raj Kale", email: "rajas.p.kale@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Rich Werden", email: "rich@richwerden@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Salih Abuelyaman", email: "salih7@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Steve Kim", email: "emailstevenkim@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Tom Dickson", email: "salih7@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Tyler Pate", email: "tylerrosspate@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" },
  { name: "Vincent Van Buskirk", email: "vvanbuskirk805@gmail.com", location: "San Francisco", work: "Hack Reactor", photoUrl: "" }],
  function(err, docs) {
    if(err) {
      console.log(err);
      process.exit();
    } else {
      console.log('Successful batch insert!!!!!!!', docs.insertedCount, 'items!!!');
      process.exit();
    }
  }
);