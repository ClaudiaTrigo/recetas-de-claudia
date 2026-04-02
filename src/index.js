import { createIcons, Star, Clock, Users, Check } from 'lucide';

// 1. INICIALITZACIÓ GLOBAL
function initIcons() {
    createIcons({
        icons: { Star, Clock, Users, Check }
    });
}
initIcons();

// 2. FUNCIONS DE VALIDACIÓ REUTILITZABLES
function validarNom(nom) {
    if (nom.length < 3) {
        alert('El nom ha de tenir almenys 3 caràcters.');
        return false;
    }
    return true;
}

function validarEmail(email) {
    if (!email.includes('@') || !email.endsWith('.com')) {
        alert('El correu ha de ser vàlid (ha de contenir "@" i acabar en ".com").');
        return false;
    }
    return true;
}

// 3. LÒGICA DE LES ESTRELLES (UI)
function actualitzarEstrelles(puntuacio) {
    const estrelles = document.querySelectorAll('.stars label');
    estrelles.forEach(label => {
        const valorEstrella = parseInt(label.getAttribute('for').replace('star', ''));
        const icona = label.querySelector('svg');
        
        if (icona) {
            if (valorEstrella <= puntuacio) {
                icona.classList.add('star-filled');
                icona.classList.remove('star-empty');
            } else {
                icona.classList.remove('star-filled');
                icona.classList.add('star-empty');
            }
        }
    })
}

const inputEstrella = document.querySelectorAll('.stars input');
inputEstrella.forEach(input => {
    input.addEventListener('change', () => {
        actualitzarEstrelles(parseInt(input.value));
    })
})

// 4. LÒGICA DE COMENTARIS (LocalStorage)
const commentForm = document.getElementById('comment-form');
const commentsList = document.querySelector('.comments-list');
const recipeTitleElement = document.querySelector('h1');
const recipeId = recipeTitleElement ? recipeTitleElement.innerText.toLowerCase().replace(/\s/g, '-') : null;

// Funció per renderitzar un comentari al DOM
function renderComment(comment) {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= comment.rating ? 'star-filled' : 'star-empty';
        starsHtml += `<i data-lucide="star" class="${isFilled}"></i>`;
    }

    commentItem.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${comment.author || 'Usuari Anònim'}</span>
            <div class="comment-rating">${starsHtml}</div>
        </div>
        <p class="comment-text">${comment.text}</p>
    `;

    commentsList.appendChild(commentItem);
    initIcons(); // Tornar a carregar icones per als nous elements
}

// Funció per carregar comentaris des del LocalStorage
function loadComments() {
    if (!recipeId) return;
    const savedComments = JSON.parse(localStorage.getItem(`comments-${recipeId}`)) || [];
    savedComments.forEach(comment => renderComment(comment));
}

// Event Listener per al formulari de comentaris
if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const text = document.getElementById('new-comment').value.trim();
        const rating = document.querySelector('input[name="star"]:checked')?.value || 0;

        // Validacions comunes i específiques
        if (!validarNom(nom) || !validarEmail(email)) return;

        if (rating <= 0) {
            alert('Si us plau, selecciona una valoració (mínim una estrella).');
            return;
        }

        if (text.length < 3) {
            alert('El comentari ha de tenir almenys 3 caràcters.');
            return;
        }

        // Guardar i renderitzar
        const newComment = { author: nom, text, rating, date: new Date().toISOString() };
        const savedComments = JSON.parse(localStorage.getItem(`comments-${recipeId}`)) || [];
        savedComments.push(newComment);
        localStorage.setItem(`comments-${recipeId}`, JSON.stringify(savedComments));

        renderComment(newComment);
        commentForm.reset();
        actualitzarEstrelles(0);
        alert('El teu comentari s\'ha guardat correctament!');
    });
}

// Inicialització de comentaris en carregar la pàgina
loadComments();

// 5. LÒGICA DE SUGGERIMENTS (Categoria 3)
const suggestionForm = document.getElementById('suggestion-form');

if (suggestionForm) {
    suggestionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const tipus = document.getElementById('tipus-recepta').value;
        const descripcio = document.getElementById('descripcio').value.trim();

        // Validacions comunes i específiques
        if (!validarNom(nom) || !validarEmail(email)) return;

        if (tipus === "") {
            alert('Si us plau, selecciona un tipus de recepta.');
            return;
        }

        if (descripcio.length < 10) {
            alert('La descripció ha de tener almenys 10 caràcters per ser vàlida.');
            return;
        }

        console.log('Suggeriment rebut:', { nom, email, tipus, descripcio });
        alert('Gràcies per la teva proposta! L\'equip la revisarà aviat.');
        suggestionForm.reset();
    });
}
