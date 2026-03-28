
import { createIcons, Star, Clock, Users, Check } from 'lucide';

// Inicialització d'icones
function initIcons() {
    createIcons({
        icons: { Star, Clock, Users, Check }
    });
}

initIcons();

// Lògica de Comentaris amb LocalStorage
const commentForm = document.getElementById('comment-form');
const commentsList = document.querySelector('.comments-list');
const recipeId = document.querySelector('h1').innerText.toLowerCase().replace(/\s/g, '-');


function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${recipeId}`)) || [];

    savedComments.forEach(comment => {
        renderComment(comment);
    });
}

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
            <span class="comment-author">Usuari Anònim</span>
            <div class="comment-rating">${starsHtml}</div>
        </div>
        <p class="comment-text">${comment.text}</p>
    `;

    commentsList.appendChild(commentItem);
    initIcons();
}

if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const text = document.getElementById('new-comment').value;
        const rating = document.querySelector('input[name="star"]:checked')?.value || 0;

        if (text && rating > 0) {
            const newComment = { text, rating, date: new Date().toISOString() };

            // Guardar al localStorage
            const savedComments = JSON.parse(localStorage.getItem(`comments-${recipeId}`)) || [];
            savedComments.push(newComment);
            localStorage.setItem(`comments-${recipeId}`, JSON.stringify(savedComments));

            renderComment(newComment);

            commentForm.reset();
            alert('El teu comentari s\'ha guardat correctament!');
        } else {
            alert('Si us plau, selecciona una valoració i escriu un comentari.');
        }
    });
}

loadComments();
