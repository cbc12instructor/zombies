// data model
var Outbreak = {
	'Georgia': {
		'active'  : 0,
		'new'     : 5,
		'zombies' : 0
	},
	'South Carolina': {
		'active'  : 100,
		'new'     : 300,
		'zombies' : 4888
	},
	'North Carolina': {
		'active'  : 100,
		'new'     : 300,
		'zombies' : 4888
	},
	'Florisiana': {
		'active'  : Math.floor(Math.random() * 100000),
		'new'     : Math.floor(Math.random() * 100000),
		'zombies' : Math.floor(Math.random() * 100000)
	} 
};
// functions/events

// update page
for ( var state in Outbreak ) {
	var htmlState = state.toLowerCase().split(' ').join('_');

	for ( var cases in Outbreak[state] ) {

		var el = document.getElementById(htmlState + '_' + cases);
		el.innerHTML = Outbreak[state][cases];

	}

}