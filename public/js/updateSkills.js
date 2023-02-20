

const skillBtns = document.querySelectorAll(".skillTag");

var skillsBody = [];

const getCurrentSkills = async () => {
        skillsBody = await fetch('/api/users/skillget', {
            method: 'GET'    
        })
        
}
getCurrentSkills();

const updateSkills = async (tagIds) => {
    console.log('Body: ' + skillsBody);
    const test = skillsBody.concat(tagIds);
    console.log('test: ' + test);
    if (tagIds) {
        console.log(tagIds)
        const response = await fetch('/skills', {
            method: 'PUT',
            body: JSON.stringify({tagIds: [tagIds]}),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            // document.location.replace('/skills');
        } else {
            alert(response.statusText);
        }
    }
}

skillBtns.forEach((element) => {
    element.addEventListener("click", function (event) {
    updateSkills(event.target.value)
});
});
