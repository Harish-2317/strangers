
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', () => {
          const card = button.closest('.card');
          card.classList.toggle('open');
          button.childNodes[0].textContent = card.classList.contains('open') ? 'Show Less ' : 'RULES AND REGULATIONS';
        });
      });

  