const skills = [
    {id: 1, skill: 'JavaScript', level: 'adept'},
    {id: 2, skill: 'CSS', level: 'adept'},
    {id: 3, skill: 'HTML', level: 'adept'},
    {id: 4, skill: 'Python', level: 'none'},

];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id)
}