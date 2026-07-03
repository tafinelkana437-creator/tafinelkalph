const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

const skills = [
    { name: 'HTML', percent: 70 },
    { name: 'CSS', percent: 65 },
    { name: 'JavaScript', percent: 35 },
    { name: 'Analyste de courbe financière', percent: 65 }
];
const languageLevel = { name: 'Anglais', level: 'Intermédiaire' };

function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    const languageBox = document.getElementById('language-level');
    if (!skillsList || !languageBox) return;

    skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';

        const info = document.createElement('div');
        info.className = 'skill-info';
        info.innerHTML = `<span>${skill.name}</span><span>${skill.percent}%</span>`;

        const bar = document.createElement('div');
        bar.className = 'skill-bar';
        const progress = document.createElement('div');
        progress.className = 'skill-progress';
        progress.style.width = '0%';
        bar.appendChild(progress);

        item.appendChild(info);
        item.appendChild(bar);
        skillsList.appendChild(item);

        requestAnimationFrame(() => {
            setTimeout(() => {
                progress.style.width = `${skill.percent}%`;
            }, 100);
        });
    });

    languageBox.textContent = `${languageLevel.name} : ${languageLevel.level}`;
}

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') navLinks.style.display = '';
        else navLinks.style.display = 'flex';
    });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci! Message prêt à être envoyé.');
    });
}

document.addEventListener('DOMContentLoaded', renderSkills);

