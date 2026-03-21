//your JS code here. If required.
const bands =  [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog'
];

function stripArticle(str) {
	return str.replace(/^(a |an |the )/i, '').trim();
}

bands.sort(function(a,b) {
	const bandA = stripArticle(a).toLowerCase();
	const bandB = stripArticle(b).toLowerCase();
	
	if(bandA < bandB) {
		return -1;
	}
	if(bandA > bandB) {
		return 1;
	}
	return 0;
});

var bandsList = document.getElementById('bands');

for(var i = 0; i < bands.length; i++){
	var li = document.createElement('li');
	li.innerText = bands[i];
	bandsList.appendChild(li);
};




