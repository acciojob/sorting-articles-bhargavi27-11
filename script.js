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

const sortedBands = bands.sort(function(a,b) => {
	const bandA = stripArticle(a).toLowerCase();
	const bandb = stripArticle(b).toLowerCase();
	
	if(bandA > bandb) return -1;
	if(bandA < bandb) return 1;
	return 0;
});

const bandsList = document.getElementById('bands');

sortedBands.forEach(function(band) => {
	const li = document.createElement('li');
	li.innerText = band;
	bandsList.appendChild(li);
});




