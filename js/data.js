let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');
let $ = cheerio.load('http://terrarp.net/threads/kyupin-felnya.1658/');
jsonframe($); // initializes the plugin

let frame = {
  "Name":".rName.first"
};

var profileList = $(.list.items).scrape(frame);
console.log(profileList); // Output the data in the terminal
