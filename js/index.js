$(document).ready(function() {

    $('.hamburger__container').click(() => {
        $('.hamburger__container').toggleClass('change');
        $('.nav__list').toggleClass('dropdown');
    });

    const skills = ["NodeJS", "React", "Redux", "MongoDB", "PostgreSQL"];
    const numberOfSkills = skills.length;
    let index = 0;

    setInterval(function() {
        $('#developer-skills').text(skills[index]);
        index = (index + 1) % numberOfSkills;
    }, 3000)

});