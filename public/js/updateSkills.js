const UserBtns = document.querySelectorAll(".userSkillTag")
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
        const response = await fetch('/skills', {
            method: 'PUT',
            body: JSON.stringify({ tagIds: [tagIds] }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace('/skills');
        } else {
            alert(response.statusText);
        }
    }
}
const deleteSkills = async (id) => {
    if (id) {
        const response = await fetch('/skills', {
            method: 'DELETE',
            body: JSON.stringify({ id: id }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace('/skills');
        } else {
            alert(response.statusText);
        }
    }
}

skillBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
        updateSkills(event.target.value);
    });
});

UserBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
        deleteSkills(event.target.value);
    });
})

