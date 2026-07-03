const projectsPortfolio = [
    {
        title: 'Graphiste et Photographe',
        image: 'Document A4 Couverture Portfolio Book Graphiste Artiste Moderne Beige et Noir (2).jpg',
        description: 'Conception de cover et de logo pour des projets professionnels. Expertise en design graphique combinée avec la photographie pour créer des visuels de haute qualité.',
        type: 'Design Graphique',
        tech: 'Adobe Illustrator, Photoshop, Photography'
    },
    {
        title: 'Portfolio Moderne',
        image: 'Documento A4 Portafolio Moderno Blanco y Negro(1).jpg',
        description: 'Travaille pour acquérir de l\'expérience dans le domaine du design et du développement. Ce projet démontre mes compétences en création de portfolio professionnel.',
        type: 'Design & Portfolio',
        tech: 'Adobe XD, InDesign, HTML/CSS'
    }
];

const photosCreatives = [
    {
        title: 'Photo Studio 1',
        image: 'PHOTO-2026-06-24-21-31-36.jpg',
        description: 'Séance photo créative et professionnelle. Capturer l\'essence et la qualité dans chaque cliché.',
        type: 'Photographie',
        tech: 'Appareil photo professionnel, Photoshop'
    },
    {
        title: 'Photo Studio 2',
        image: 'PHOTO-2026-06-24-21-31-36(1).jpg',
        description: 'Travail de composition et d\'éclairage pour des projets visuels de haute qualité.',
        type: 'Photographie Créative',
        tech: 'Studio Photography'
    },
    {
        title: 'Photo Créative',
        image: 'PHOTO-2026-06-24-21-35-15.jpg',
        description: 'Exploration artistique à travers la photographie. Jeux de lumière et de perspectives.',
        type: 'Art Photographique',
        tech: 'Creative Photography'
    },
    {
        title: 'Photo Professionnel',
        image: 'PHOTO-2026-06-24.jpeg',
        description: 'Portait professionnel et édition soignée. Qualité de studio pour vos besoins.',
        type: 'Portrait Professionnel',
        tech: 'Professional Photography'
    }
];

function renderGallery(projects, galleryId){
    const gallery = document.getElementById(galleryId);
    gallery.innerHTML = projects.map((project, index) => `
        <div class="project-item" onclick="openModal(${index}, '${galleryId}')">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
    `).join('');
}

function openModal(index, galleryId){
    const projects = galleryId === 'gallery-portfolio' ? projectsPortfolio : photosCreatives;
    const project = projects[index];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalType').textContent = project.type;
    document.getElementById('modalTech').textContent = project.tech;
    document.getElementById('projectModal').classList.add('active');
}

function closeModal(){
    document.getElementById('projectModal').classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
});

document.getElementById('projectModal').addEventListener('click', (e) => {
    if(e.target.id === 'projectModal') closeModal();
});

document.addEventListener('DOMContentLoaded', () => {
    renderGallery(projectsPortfolio, 'gallery-portfolio');
    renderGallery(photosCreatives, 'gallery-photos');
});
