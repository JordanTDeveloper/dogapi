function getDogImages(num) {
	fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
		.then((response) => response.json())
		.then((responseJson) => displayResults(responseJson))
		.catch((error) => console.error(error));
}

function generateResults(responseJson) {
	const dogPics = [];
	for (let i = 0; i < responseJson.message.length; i++) {
		dogPics.push(
			`<img src="${responseJson.message[i]}" class="results-img"></img>`
		);
	}
	return dogPics;
}

function displayResults(responseJson) {
	const html = generateResults(responseJson).join('');
	$('#dogs').html(html);

	$('.results').removeClass('hidden');
}

function watchForm() {
	$('form').submit((event) => {
		event.preventDefault();
		const num = $('#howManyDoggos').val();
		getDogImages(num);
	});
}

$(watchForm);
