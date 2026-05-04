document.addEventListener("DOMContentLoaded", function() {
    const repoContainer = document.getElementById('repo-container');
    const githubUser = 'samadesan';

    async function fetchRepos() {
        try {
            const response = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=50`);
            const repos = await response.json();

            repoContainer.innerHTML = '';

            // LÓGICA DE ORDENACIÓN: 1. Estrellas (Pinned) | 2. Web publicada | 3. Actualización
            repos.sort((a, b) => {
                if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
                if (b.has_pages !== a.has_pages) return b.has_pages - a.has_pages;
                return new Date(b.pushed) - new Date(a.pushed);
            });

            repos.forEach(repo => {
                const techColors = {
                    'JavaScript': '#f7df1e',
                    'HTML': '#e34f26',
                    'CSS': '#1572b6',
                    'PHP': '#777bb3',
                    'Python': '#3776ab',
                    'Default': 'var(--purple)'
                };

                const accentColor = techColors[repo.language] || techColors['Default'];
                const deployUrl = `https://${githubUser}.github.io/${repo.name}/`;
                const textColor = (accentColor === '#f7df1e') ? '#000' : '#fff'; // Contraste para amarillo

                const repoHTML = `
                    <article class="col-md-6 col-lg-4 mb-4">
                        <div class="card bg-card-advanced border-0 h-100" 
                             style="border-top: 4px solid ${accentColor} !important; background: var(--bg-card);">
                            <div class="p-4 d-flex flex-column h-100">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h3 class="h5 fw-bold text-uppercase m-0" style="letter-spacing:-1px; color: var(--text-main);">${repo.name}</h3>
                                    ${repo.stargazers_count > 0 ? '<i class="bi bi-pin-angle-fill text-emerald"></i>' : ''}
                                </div>
                                
                                <p class="text-muted small mb-4 flex-grow-1">
                                    ${repo.description || 'Desarrollo avanzado en entorno DAW. Enfoque en arquitecturas escalables.'}
                                </p>

                                <div class="mb-4">
                                    <span class="badge" style="background: ${accentColor}; color: ${textColor}; font-size: 0.6rem; letter-spacing: 1px; border-radius: 2px;">
                                        ${repo.language || 'LENGUAJE NO DETECTADO'}
                                    </span>
                                    ${repo.has_pages ? '<span class="badge ms-2" style="background: var(--emerald); color: #000; font-size: 0.6rem;">WEB DISPONIBLE</span>' : ''}
                                </div>

                                <div class="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary">
                                    <a href="${repo.html_url}" target="_blank" class="btn-repo-link">
                                        VER CÓDIGO EN GITHUB <i class="bi bi-github"></i>
                                    </a>
                                    ${repo.has_pages ? `
                                        <a href="${deployUrl}" target="_blank" class="btn-repo-link btn-visit-active">
                                            VISITAR SITIO WEB <i class="bi bi-arrow-up-right"></i>
                                        </a>
                                    ` : '<span class="btn-repo-link disabled" style="opacity:0.3; cursor:not-allowed;">SIN DESPLIEGUE TODAVÍA</span>'}
                                </div>
                            </div>
                        </div>
                    </article>
                `;
                repoContainer.innerHTML += repoHTML;
            });
        } catch (error) {
            repoContainer.innerHTML = `<div class="col-12 text-center text-danger">ERROR AL SINCRONIZAR CON GITHUB</div>`;
        }
    }
    fetchRepos();
});