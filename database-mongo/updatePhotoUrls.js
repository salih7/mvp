var collections = require('../database-mongo');

var photoFileIds = { 
  "Agnes Chu":"0B3AAJJ2UZGHwWWRXSnZIbUZfdjg",
  "Airyque Ervin":"0B3AAJJ2UZGHwc1FIT0ZIVnROQUk",
  "Alan Zheng":"0B3AAJJ2UZGHwR3lKT2FwZ0hOa28",
  "Alex Liang":"0B3AAJJ2UZGHwN2duNng3YzFQYms",
  "Ali Elgiadi":"0B3AAJJ2UZGHwU1YxMzNLSW1kSDQ",
  "Anthony Wong":"0B3AAJJ2UZGHwTG1ycDNuZXZHZjA",
  "Bill Beedle":"0B3AAJJ2UZGHwMndjNWtnbWdRYWs",
  "Charles Kim":"0B3AAJJ2UZGHwQlNmY0xvajBSNms",
  "Chris Keating":"0B3AAJJ2UZGHwUnNZbF9LNmhaaDA",
  "David Gould":"0B3AAJJ2UZGHwVFgxbEhVUVJsd3c",
  "Doug Cox":"0B3AAJJ2UZGHwcHZJbWh2aHFkLUU",
  "Drew Bedford-Hart":"0B3AAJJ2UZGHwakF3dGd1V2VaN1U",
  "Gunpreet Singh":"0B3AAJJ2UZGHwMF9hb2d0MFoyUnM",
  "He Liu":"0B3AAJJ2UZGHwekZYN2tYTFRoTnM",
  "Jack Ren":"0B3AAJJ2UZGHwN3pDeVo0MjhiNW8",
  "Jeff Chen":"0B3AAJJ2UZGHwVmVBWlB2a1p2dWs",
  "Jim Lee":"0B3AAJJ2UZGHwM1U0aU5hM3FWTkU",
  "Joe Zizzo":"0B3AAJJ2UZGHwaVRBNENwa2VYTHc",
  "Jon Eric Escobedo":"0B3AAJJ2UZGHwRUVmck5FNThpTms",
  "Kara Marnell":"0B3AAJJ2UZGHwcFZ1dTFHN2hZSG8",
  "Kriz Cortez":"0B3AAJJ2UZGHwOGd1djVBUmhqZTg",
  "Michael Sermersheim":"0B3AAJJ2UZGHwLU5tRlpDT3h0aWs",
  "Lavanya Ammi Chandrashekara":"0B3AAJJ2UZGHwUy1sMGhzRnFEcms",
  "Ming Feng":"0B3AAJJ2UZGHwemxmWkctSTM0eHc",
  "Nick Anderson":"0B3AAJJ2UZGHwTFEyU2lpRXd1bTQ",
  "Oliver Ullman":"0B3AAJJ2UZGHwVktscDhmVy1CdDg",
  "Preda Wen":"0B3AAJJ2UZGHwUmtEVkdQb2FXdDA",
  "Raj Kale":"0B3AAJJ2UZGHwRE0xSzFnLURKeHM",
  "Rich Werden":"0B3AAJJ2UZGHwS2NXSjZVVVNVYmM",
  "Salih Abuelyaman":"0B3AAJJ2UZGHwRFpzRy0tbjJHaVU",
  "Steve Kim":"0B3AAJJ2UZGHwY0h1TmxPNV9EMms",
  "Tom Dickson":"0B3AAJJ2UZGHwbmtnbUdLUndHV0k",
  "Tyler Pate":"0B3AAJJ2UZGHwSEN2djhwSDVUME0",
  "Vincent Van Buskirk":"0B3AAJJ2UZGHwSU8tOFBveTR0dDQ"
}

for(var name in photoFileIds) {
  collections.update(
                     { name: name }, 
                     { $set: { photoUrl: `https://drive.google.com/uc?export=view&id=${photoFileIds[name]}`
                             } 
                     },
                     function(err, doc) {
                       if(err) {
                         console.log(err);
                         process.exit();
                       } else {
                         console.log('Successfully updated document');
                       }
                     } 
                    );
}
// $.get("https://www.googleapis.com/drive/v2/files?q='0B_VbSXjYPQ4iaU5LeTBzemRpblE'+in+parents&key=AIzaSyDBENGISUHt0AxhU_EotpiXwj8CPsbaHXs", function(folderObj) {
// photoArray = folderObj.items;
// photoArray.forEach(photo => {
//   photoObj[photo.title.slice(0, photo.title.length - 4)] = photo.id;
// });
// console.log(photoObj);
// console.log(JSON.stringify(photoObj));