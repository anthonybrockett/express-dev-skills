const skills = [
    {id: 1, skill: 'JavaScript', achieved: true},
    {id: 2, skill: 'CSS', achieved: true},
    {id: 3, skill: 'HTML', achieved: true},
    {id: 4, skill: 'Python', achieved: false},

];

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne,
    update
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.achieved = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const skillIdx = skills.findIndex((s) => s.id === id);
    skills.splice(skillIdx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkill);
}