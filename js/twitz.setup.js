//MICHALIS PSITOS github.com/tonusu/twitz.js
//twitz.js setup file

/************************************************************/
// Edit variables below
/************************************************************/

var listlink = 'https://twitter.com/ExampleTwitterUsername/ExamplePublicTwitterListName'; //EDIT THIS. the url of your list
var widgetid = '123456789012345678'; //EDIT THIS. the id of your list

var TwitzContainer = 'twitz-container1'; // the container you want to load the twitz in. They will be appended
var linkcolor = '#ff0000'; //the color of links in the widget
var classname1 = 'twitz'; //a css class name for the wrapper of widget style 1 .default css is 1/3ish
var classname2 = 'double-twitz'; //a css class name for the wrapper of widget style 2 .default css is 1/2ish
var hei1 = 400; //the height of the actual widget
var moreText = 'MORE PLEASE'; //The loading button text
var TwitzAccounts = [ // array of the twitter user accounts you want 

// Example
// ["widget title", "twitter user name", " widget style. 1 = classname1 and 2 = classname2 - see above"],
// CAUTION. Combinations of widget styles among the twitz of a step may brake continuity if shuffle is true

["ZELDMAN", "zeldman", "2"],
["SOUEIDAN", "SaraSoueidan", "2"],
["IRISH", "paul_irish", "2"],
["COYIER", "chriscoyier", "2"],
["STAMATIOU", "Stammy", "2"],
["WALSH", "davidwalshblog", "2"],
["VEROU", "LeaVerou", "1"],
["O'REILLY", "timoreilly", "1"],
["JAVASCRIPT DAILY", "JavaScriptDaily", "1"],
["WEBPLATFORM", "WebPlatform", "1"],
["MODERNIZER", "Modernizr", "1"],
["SMASHING MAG", "smashingmag", "1"],
["GOOGLE DEVS", "googledevs", "2"],
["ANDROID", "Android", "2"],
["CSS", "csswg", "2"],
["NET MAG", "netmag", "2"],
["MASHABLE", "mashable", "2"],
["CSS TRICKS", "Real_CSS_Tricks", "2"],
["GATES", "BillGates", "1"],
["CORDOVA", "apachecordova", "1"],
["NEXUS", "googlenexus", "1"],
["EDGE DEVS", "EdgeDevTools", "1"],
["CANIUSE", "caniuse", "1"],
["GSM ARENA", "gsmarena_com", "1"]
];

buildTwitz(0,6,true,true); //Initiating twitz.js
// buildTwitz(
// 1	start of twitz list to render .0 the beginning,
// 2	step of twitz to render -less for faster load time-,
// 3    shuffle the accounts of the step,
// 4	show load button if more twitz available);