$(document).ready(function documentIsReady(){
	$('#nextPage').click(function nextPage(event){
		event.preventDefault();
		var firstName = $('#inputFirstName').val();
		var lastName = $('#inputLastName').val();
		var skills = $('#inputSkills').val()
		var description = $('#inputDescription').val()
		var achivements = $('#inputAchivements').val()

		console.log(firstName + ' ' + lastName);
		console.log(skills)
		console.log(description)
		console.log(achivements)

		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName)
		localStorage.setItem('skills', skills)
		localStorage.setItem('description', description)
		localStorage.setItem('achivements', achivements);

		
	})
});