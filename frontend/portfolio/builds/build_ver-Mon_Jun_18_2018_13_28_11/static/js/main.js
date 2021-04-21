
var archiveLink = document.querySelectorAll('.card-list__item-archive .card-list__item-link');

for (var i = 0; i < archiveLink.length; i++) {
	archiveLink[i].addEventListener('click', function(e) {
		e.preventDefault();
	});	
}






