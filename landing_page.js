document.addEventListener('DOMContentLoaded', function () {
  const name = 'Sithembiso';
  document.getElementById("welcome-msg").textContent = `Welcome, ${name} 🌤️`;

  const KRA_cards = [
    ['Financial', 0.05, '15/05/2025', 5.00],
    ['Practice', 0.35, '15/05/2025', 2.00],
    ['Culture', 0.10, '15/05/2025', 3.85],
    ['Customer', 0.50, '15/05/2025', 3.10]
  ];

  function getStars(rating) {
    let fullStars = Math.floor(rating);
    let halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fullStars - halfStar;

    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '★';
    if (halfStar) stars += '½';
    for (let i = 0; i < emptyStars; i++) stars += '☆';

    return stars;
  }

  const container = document.getElementById('dash_cards');

  KRA_cards.forEach(([KPA, KPI, dateCreated, Rating]) => {
    const card = document.createElement('div');
    card.className = 'card';

    const stars = getStars(Rating);

    card.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg" class="meatball_menu">
        <circle cx="12" cy="12" r="1" transform="rotate(90 12 12)" stroke-linecap="round"/>
        <circle cx="12" cy="6" r="1" transform="rotate(90 12 6)" stroke-linecap="round"/>
        <circle cx="12" cy="18" r="1" transform="rotate(90 12 18)" stroke-linecap="round"/>
      </svg>

      <h1>KPA: ${KPA}</h1>
      <p><strong>KPI Wt:</strong> ${(KPI * 100).toFixed(1)}%</p>
      <p><strong>Date created:</strong> ${dateCreated}</p>
      <p style="float: left; margin-right: 10px;"><strong>Rating score:</strong> ${Rating.toFixed(2)}</p><p style="float: left;">${stars}</p>

      <br>
            <button class="card-cta" data-kpa="${KPA}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg" class="kpi-edit-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67152 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27311L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87627 11.7269 8.27311Z"/>
              </svg>
              Edit
      </button>
    `;

    container.appendChild(card);
  });

  const designTeam = [
    ['Michael Jacobs','Front-End Developer', "src/img/designTeam/michaelJacobs.jpg", 7],
    ['Leah Nkambule', 'Team Lead', "src/img/designTeam/leahNkambule.jpg", 3],
    ['Mariette Janse Van Rensburg', 'UX Lead', "src/img/designTeam/marietteJR.jpg", 5],
    ['Zakhele Jali', 'Front-End Developer', "src/img/designTeam/zakesJali.jpg", 3]
  ];

  const teamContainer = document.getElementById('team_cards');

  designTeam.forEach(([Name, Role, Avi, Years]) => {
    const teamCard = document.createElement('div');
    teamCard.className = 'teamCard';

    teamCard.innerHTML = `
          <h1><strong>DeXD Team</strong></h1>
      <img src="${Avi}" alt="${Name}'s photo" />
      <h1>${Name}</h1>
      <p>${Role}</p>
    `;

    teamContainer.appendChild(teamCard);
  });
});
