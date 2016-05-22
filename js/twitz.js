//MICHALIS PSITOS


// Better NOT edit variables below
var wid1 = 520;   //180 - 520
var end = 0;
var start = 0;
var step = 0;
var LoadMore = true;


//TWITZ BUILDING FUNCTION

function buildTwitz(start, step, LoadMore) {

	var widgetshtml = "";
	end = start + step;
	newStart = start;
	newStep = step;

	//MAJOR IF CHECKING REMAINING BRIKS AND MORE
	if (start + step <=  acnts.length){
		if (start + step ==  acnts.length){LoadMore=false;}



			//NEW ARRAY BASED ON THE STEP
			var arr = [];
			for (var i=start; i<end; i++) {
				arr.push(acnts[i]);
			}
			shuffle(arr);


			//REMOVING LAST MORE BUTTON OR DUMMY PLACEHOLDER
			document.getElementById('moreTwitz').remove();

			//INJECTING TWITTER LIBRARY ONCE FOR EVERY STEP
			(function(d, script) {
				script = d.createElement('script');
				script.type = 'text/javascript';
				script.async = true;
				script.src = 'http://platform.twitter.com/widgets.js';
				d.getElementsByTagName('head')[0].appendChild(script);
			}(document));



			//MAIN LOOP
			for (var b=start; b<end; b++) {

				//SETTING DIFFERENT CLASS NAMES ACCORDING TO SET UP
				if (arr[b - start][2] == 2) {
					brkstyle = classname1 + ' ' + classname2;
				} else {
					brkstyle = classname1;
				}

				//BUILDING TWITZ
				for (var j = 0, countb = arr[0].length; j < countb; j++) {

					j++;
					widgetshtml += '<div id="' + arr[b - start][j] + '" class="' + brkstyle + '">';
					j--;
					widgetshtml += '<div class="ttitle"><h2 class="tname">' + arr[b - start][j];
					widgetshtml += '</h2>';
					j++;
					widgetshtml += '<h2 class="taccount"><a href="https://twitter.com/' + arr[b - start][j] + '"';
					widgetshtml += 'target="_blank">@' + arr[b - start][j]; + '</a></h2>';
					widgetshtml += '</div>';
					widgetshtml += '<div class="tbox"><a class="twitter-timeline" width="' + wid1 + '" height="' + hei1 + '" data-link-color="' + linkcolor + '" data-chrome="nofooter noheader transparent" ';
					widgetshtml += '" data-screen-name="' + arr[b - start][j] + '" href="' + listlink + '" data-show-replies="false" data-aria-polite="assertive" data-widget-id="' + widgetid + '"><center style="margin-top:25%"><img src="images/twitzloader.gif"/></center></a>';
					widgetshtml += '</div>';
					widgetshtml += '</div>';
					j++;
				}
			}

			//SETTING NEW START 
			start = start + step;

			//CHECKING IF THERE SHOULD BE A MORE BUTTON
			if (LoadMore !== false) {

				newStart = start;
				newStep = step;

				moreButton = '<a href="javascript:void(0);" id="moreTwitz" class="twitz-button" onClick="buildTwitz(' + newStart + ',' + newStep + ');">' + moreText + '</a>';
			} else {
				moreButton = '';
			}

			//ADDING NEW TWITZ
			var more = document.createElement("div");
			more.innerHTML = widgetshtml + moreButton;
			document.getElementById("twitz-container1").appendChild(more);

			}



	else {
		newStep = acnts.length - start;
		buildTwitz(newStart, newStep);
		document.getElementById('moreTwitz').remove();
	}
	//END OF MAJOR IF CHECKING REMAINING BRIKS AND MORE
}


//ARRAY SHUFFLING
// Fisher-Yates (aka Knuth) Shuffle.
// See github.com/coolaj86/knuth-shuffle

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;


	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}



//FUNCTION TO REMOVE
Element.prototype.remove = function() {
	this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for (var i = 0, len = this.length; i < len; i++) {
		if (this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
};