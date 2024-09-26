// Selecionar os elementos
const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

//adicionar contato
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');

    const contactName = nameInput.value.trim();
    const contactPhone = phoneInput.value.trim();

    if (contactName && contactPhone) {
        const li = document.createElement('li');
        li.textContent = `${contactName} - ${contactPhone}`;

        //remover contato
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', function() {
            contactList.removeChild(li);
        });

        li.appendChild(removeBtn);
        contactList.appendChild(li);

        // Limpar campos de entrada
        nameInput.value = '';
        phoneInput.value = '';
    }
});
