

const skillBtns = document.querySelectorAll(".skillTag");

const updateSkills = async (tagIds) => {
    if (tagIds) {
        console.log(tagIds)
        const response = await fetch('/skills', {
            method: 'PUT',
            body: JSON.stringify({tagIds: [tagIds]}),
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
    element.addEventListener("click", function (event) {
    updateSkills(event.target.value)
});
});
