"use strict";
const nom = "Hsin-I Tsai";
const keyColor = "#D9027D";

// Function to set key color to certain elements
const setKeyColor = (element) => {
  element.style.backgroundColor = keyColor;
  element.style.borderColor = keyColor;
};

// Set key color to header, footer, circles and footer button
setKeyColor(document.querySelector("header"));

setKeyColor(document.querySelector("footer"));

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.style.borderColor = keyColor;
});

const btnFooter = document.querySelector("footer button");
btnFooter.style.backgroundColor = keyColor;

// Function to add experience or education
const addItem = (yearStart, yearEnd, title, description) => {
  const newLi = document.createElement("li");
  const newH2 = document.createElement("h2");
  const newP = document.createElement("p");

  newH2.textContent = `${yearStart}-${yearEnd} ${title}`;
  newP.textContent = description;

  newLi.appendChild(newH2);
  newLi.appendChild(newP);

  return newLi;
};

const addExperience = (yearStart, yearEnd, company, description) => {
  const proSection = document.querySelector("#pro ul");
  proSection.appendChild(addItem(yearStart, yearEnd, company, description));
};

const addEducation = (yearStart, yearEnd, school, description) => {
  const eduSection = document.querySelector("#form ul");
  eduSection.appendChild(addItem(yearStart, yearEnd, school, description));
};

// Function to create a button element
const createButton = (text, bgColor) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.padding = "10px";
  button.style.backgroundColor = bgColor;
  return button;
};

// Function to handle adding experience
const handleAddExperience = () => {
  const yearStart = prompt("Veuillez entrer l'année de début");
  const yearEnd = prompt("Veuillez entrer l'année de fin");
  const company = prompt("Veuillez entrer le nom de l'entreprise");
  const description = prompt("Veuillez entrer la description");

  const proSection = document.querySelector("#pro");
  const ulElement = proSection.querySelector("ul");
  ulElement.addExperience(yearStart, yearEnd, company, description);
};

// Function to handle adding education
const handleAddEducation = () => {
  const yearStart = prompt("Veuillez entrer l'année de début");
  const yearEnd = prompt("Veuillez entrer l'année de fin");
  const school = prompt("Veuillez entrer le nom de l'école/université");
  const description = prompt("Veuillez entrer la description");

  const eduSection = document.querySelector("#form");
  const ulElement = eduSection.querySelector("ul");
  ulElement.addEducation(yearStart, yearEnd, school, description);
};

// Function to handle adding skill
const handleAddSkill = () => {
  const skill = prompt("Veuillez entrer une nouvelle compétence");
  if (skill) {
    addSkill(skill);
  }
};

//1. Remplacer le nom "Samuel Legrain" dans le titre de la page par le nom de l'étudiant.

const titre = document.querySelector("title", "h1");
titre.innerHTML = nom;

//2. Modifier le contenu des balises "h1" et "h2" dans l'en-tête pour afficher le nom de l'étudiant et son rôle (par exemple, "Développeur Web").

const h1 = document.querySelector("h1");
h1.innerHTML = nom;
const h2 = document.querySelector("h2");
h2.innerHTML = "Développeur Web Full Stack";

//3. Mettre à jour la section "Qui suis-je ?" avec une courte description de l'étudiant.

const whoSection = document.querySelector("#who");

if (whoSection) {
  const circleImage = whoSection.querySelector(".circle img");
  circleImage.setAttribute("src", "./assets/images/tina.jpg");
  const pElement = whoSection.querySelector("p");
  if (pElement) {
    pElement.textContent =
      "Bienvenue ! Je suis Hsin-I Tsai, une créatrice polyvalente.";

    const paragraphs = [
      "Design, codage, marketing : ces piliers encadrent mon parcours riche. Marketeuse internationale chevronnée et développeuse full-stack émergente, je fusionne créativité et technicité. Polyglotte en chinois, anglais, français et espagnol, je navigue aisément entre les cultures, m'épanouissant dans les environnements dynamiques.",
      "Fort de 15 années enrichissantes dans divers secteurs et lieux (Belgique, Espagne, Allemagne, Chine, Taïwan), mon adaptabilité se traduit par le succès, des grandes entreprises au contexte familial.",
      "Réflexion stratégique et pragmatisme sont ma méthodologie, chaque défi devenant une opportunité d'apprentissage. Passionnée d'excellence, j'aborde chaque projet avec vision à long terme et minutie.",
      "Aujourd'hui, je marie design et codage pour créer des expériences numériques captivantes. Fusionnant créativité et fonctionnalité, mon but est de captiver et convertir, alliant mon amour du marketing à l'innovation numérique. Mon objectif ? Donner vie aux visions, les élevant de possibles à réalités digitales.",
    ];

    paragraphs.forEach((paragraph) => {
      const newP = document.createElement("p");
      newP.textContent = paragraph;
      pElement.insertAdjacentElement("beforeend", newP);
    });
  }
}

//4. Modifier la section "Mon parcours" pour afficher les expériences professionnelles de l'étudiant, y compris les noms des entreprises et les descriptions correspondantes.
const proSection = document.querySelector("#pro");

if (proSection) {
  const ulElement = proSection.querySelector("ul");
  const liElements = ulElement.querySelectorAll("li");

  liElements.forEach((liElement) => {
    const h2Element = liElement.querySelector("h2").remove();
    const pElement = liElement.querySelector("p").remove();
  });

  ulElement.addExperience = addExperience;

  ulElement.addExperience(
    2022,
    2022,
    "XPENG European Holding B.V.",
    "En tant que Responsable des Affaires Publiques de l'UE chez XPENG European Holding B.V. à Amsterdam, Pays-Bas en 2022, j'ai joué un rôle central dans l'établissement et le maintien de relations avec les institutions de l'UE, les associations commerciales et les ONG. J'ai développé une compréhension approfondie du paysage politique et des politiques au sein des institutions de l'UE, notamment dans les domaines de la mobilité, du transport et du numérique. Mon rôle comprenait également la surveillance et l'identification des nouvelles politiques et réglementations de l'UE pour identifier les risques et les opportunités. Je coordonnais avec les équipes concernées pour garantir la conformité réglementaire et éventuellement établir des alliances stratégiques. J'ai mis en place un cadre de communication et de messages pour engager efficacement les parties prenantes de l'UE, tout en développant et mettant en œuvre des stratégies de communication de crise pour anticiper les problèmes potentiels."
  );
  ulElement.addExperience(
    2016,
    2020,
    "D-Link Corporation",
    "En tant que Directrice de Marketing chez D-Link Corporation à Taipei, Taiwan, de 2016 à 2020, j'ai dirigé l'équipe de marketing de D-Link, supervisant tous les aspects du marketing, de la communication à la stratégie et au développement de produits. J'ai élaboré une stratégie de marketing 4.0 exploitant les technologies et les données massives pour une précision marketing. Mon rôle a également impliqué la création d'une stratégie de communication d'entreprise cohérente, avec un accent sur la présence numérique et l'unification de la marque D-Link pour les entreprises. J'ai développé des stratégies claires et des plans pour les produits phares, en veillant à l'alignement des équipes locales et des supports marketing pour des campagnes cohérentes. J'ai géré le budget marketing et collaboré avec les filiales étrangères et les agences externes pour des campagnes efficaces concernant les produits et services cloud existants et nouveaux."
  );
  ulElement.addExperience(
    2011,
    2016,
    "Huawei Technologies",
    "De 2011 à 2015, j'ai exercé le rôle de Responsable des Relations Publiques de l'UE chez Huawei Technologies, débutant à Bruxelles, Belgique. Durant cette période, j'ai travaillé activement pour établir et renforcer des relations avec les institutions de l'UE, contribuant ainsi à forger des partenariats solides et à renforcer la réputation de l'entreprise. Mon rôle s'est ensuite développé, et en 2015, j'ai pris en charge la responsabilité des relations publiques pour les produits de consommation de Huawei, en me focalisant sur le marketing et la communication liés aux dispositifs destinés aux consommateurs. Mon travail consistait alors à élaborer et mettre en œuvre des stratégies de communication pour les dispositifs grand public, contribuant ainsi à accroître la visibilité de la marque et à renforcer son impact sur le marché."
  );

  const btnAddExperience = createButton("Ajouter Parcours", keyColor);
  const proSectionH1 = proSection.querySelector("h1");
  proSectionH1.insertAdjacentElement("afterend", btnAddExperience);

  btnAddExperience.addEventListener("click", handleAddExperience);
}

//5. Mettre à jour la section "Ma formation" avec les diplômes obtenus par l'étudiant, en indiquant l'année d'obtention et le nom du diplôme
const eduSection = document.querySelector("#form");

if (eduSection) {
  const ulElement = eduSection.querySelector("ul");
  const liElements = ulElement.querySelectorAll("li");

  liElements.forEach((liElement) => {
    const h2Element = liElement.querySelector("h2").remove();
    const pElement = liElement.querySelector("p").remove();
  });

  ulElement.addEducation = addEducation;

  ulElement.addEducation(
    2023,
    2024,
    "Interface3",
    "Je suis en train de suivre une formation de Développeur Web Full Stack chez Interface3. Plongé(e) dans le monde captivant du développement web, ce programme intensif me permet d'acquérir des compétences précieuses en programmation front-end et back-end. J'y apprends les langages essentiels tels que HTML, CSS, JavaScript, PHP, Python, C#, SQL et MySQL. J'explore également les possibilités offertes par des bibliothèques telles qu'Angular, enrichissant ainsi mon arsenal pour la création d'applications web dynamiques et captivantes. Git, un outil incontournable du développement web moderne, fait partie intégrante de mon apprentissage, renforçant ma compréhension du contrôle de version et du codage collaboratif. Le programme intègre également les méthodologies Agile et Scrum, cultivant une appréciation pour ces approches itératives et efficaces de la gestion de projet. Ces expériences contribuent à façonner ma transformation en tant que Futur Développeur Web Full Stack compétent(e), avec une focalisation sur la création de solutions numériques qui allient harmonieusement fonctionnalité et design centré sur l'utilisateur."
  );

  ulElement.addEducation(
    2022,
    2023,
    "Bruxelles Formation & IHECS Academy",
    "pendant une période de cinq mois, j'ai suivi une formation intensive en Stratégie de Marketing Digital proposée par Bruxelles Formation & IHECS Academy. Cette expérience m'a permis de plonger au cœur des stratégies de marketing numérique. Ce cours approfondi a été un outil inestimable pour perfectionner mes compétences, en me fournissant les dernières idées et techniques pour exceller dans l'univers du marketing digital. Tout au long du programme, j'ai renforcé ma compréhension de la communication numérique stratégique, en explorant des concepts cruciaux tels que la cartographie du parcours du consommateur, le marketing entrant, le marketing de performance, l'automatisation et la gestion de l'e-réputation. La formation m'a également offert l'occasion de concevoir des campagnes efficaces et de naviguer à travers différents canaux, de la publicité aux médias sociaux en passant par le référencement, Google Ads et le marketing direct. Les exercices pratiques ont amélioré ma compétence en conception UX/UI, en campagnes par e-mail, en création de contenu et en rédaction, tout en maîtrisant les graphismes visuels et les vidéos grâce à des outils numériques. De plus, le programme a mis l'accent sur l'importance de la prise de décision basée sur les données, en m'apprenant à suivre les résultats via Google Analytics, à générer des rapports avec Looker Studio, à gérer les budgets et à comprendre les principaux indicateurs et KPI. J'ai hâte de mettre en œuvre ces compétences affinées en marketing digital pour contribuer au succès futur dans ce domaine en constante évolution."
  );

  ulElement.addEducation(
    2004,
    2005,
    "Universitat Autònoma de Barcelona",
    "Une année d'études doctorales dynamiques a forgé ma compréhension du Branding, de la communication d'entreprise et de la gestion de marque. Bien que mon parcours académique ait été interrompu par une opportunité professionnelle en Belgique, cette expérience a été fondamentale pour ma carrière en marketing."
  );

  ulElement.addEducation(
    2003,
    2004,
    "IDEC-Universitat Pompeu Fabra",
    "Mon étude de Master a été une année intensive axée sur le commerce international, avec une spécialisation unique en Amérique du Sud, en Asie et en Europe de l'Est. Cette formation complète à l'idEC a jeté des bases solides pour comprendre les subtilités du commerce mondial, les pratiques commerciales régionales et la communication interculturelle. Les cours, les études de cas et les projets pratiques ont affiné ma réflexion stratégique, ma résolution de problèmes et mes compétences en leadership - le tout dans le contexte de paysages commerciaux diversifiés. Cette éducation holistique en commerce international a été le tremplin pour mes entreprises ultérieures sur divers marchés mondiaux, améliorant considérablement mon adaptabilité et ma prise de décision stratégique dans un contexte international."
  );

  // Create "Ajouter Éducation" button for Education section
  const btnAddEducation = createButton("Ajouter Éducation", keyColor);
  const eduSectionH1 = eduSection.querySelector("h1");
  eduSectionH1.insertAdjacentElement("afterend", btnAddEducation);

  btnAddEducation.addEventListener("click", handleAddEducation);
}

//6. Remplacer les informations de contact par celles de l'étudiant, y compris l'adresse e-mail et l'adresse postale.

const addressStudent = document.getElementsByTagName("address");
addressStudent[0].innerHTML =
  "Rue du Château 4<br>" +
  "1050 Ixelles<br>" +
  "BELGIQUE<br>" +
  "h.tsai@interface3.be";

//7. Ajouter une nouvelle section dans le DOM pour afficher les compétences de l'étudiant. Cette section doit contenir une liste des compétences, avec chaque compétence représentée par un élément de liste.

//adding Mes Compétences in the nav bar
const nav = document.querySelector("nav");
const newLi = document.createElement("li");
const newA = document.createElement("a");
const newDiv = document.createElement("div");
newDiv.textContent = "Mes Compétences";
newA.setAttribute("href", "#skill");
newA.appendChild(newDiv);
newLi.appendChild(newA);

const liElements = nav.querySelectorAll("li");
let refLi;

liElements.forEach((liElement) => {
  const divContent = liElement.querySelector("div").textContent;
  if (divContent === "Ma formation") {
    refLi = liElement;
  }
});

if (refLi) {
  refLi.insertAdjacentElement("afterend", newLi);
}

//clone the section of #pro to create the new section called Mes Compétences and appending it to the container div in the main
const skillSection = proSection.cloneNode(true);
skillSection.setAttribute("id", "skill");
const main = document.querySelector("main");
const container = main.querySelector(".container");
container.appendChild(skillSection);

//change the text content of the h1 in the new section #skill
const skillSectionH1 = skillSection.querySelector("h1");
skillSectionH1.textContent = "Mes Compétences";

const skillSectionH2 = skillSection.querySelector("h2");

//remove the content of the p in the new section #skill
const skillSectionP = skillSection.querySelector("p");
skillSectionP.textContent = "";
//remove the content of the ul in the new section #skill
const skillSectionUl = skillSection.querySelector("ul");
skillSectionUl.textContent = "";
//add the content of the ul in the new section #skill
const skillList = [
  "Conception et développement front-end (HTML, CSS, JavaScript)",
  "Conception et développement back-end(PHP, Python, MySQL)",
  "Gestion de versions avec des systèmes tels que Git",
  "Déploiement de sites web sur des serveurs ou services cloud",
  "Conception UX/UI",
  "CUtilisation de CMS (Content Management Systems) tels que WordPress ou Drupal",
  "Conception de bases de données",
  "Stratégie de Marketing Digital",
  "Marketing de Performance et SEM",
  "Relations Publiques et Affaires Publiques",
  "Automatisation du Marketing et Gestion de l'e-Réputation",
];
skillList.forEach((skill) => {
  const newLi = document.createElement("li");
  newLi.textContent = skill;

  // Add a bullet point in front of each li
  newLi.style.listStyleType = "disc";

  // Apply the same font as the skills list under li
  newLi.style.fontFamily = "'Ysabeau Infant', sans-serif"; // Replace with the actual font family
  newLi.style.fontSize = "16px"; // Adjust font size if needed

  skillSectionUl.appendChild(newLi);
});

const btnSkill = skillSection.querySelector("button");
btnSkill.textContent = "Ajouter Compétence";

// Create a function to add a new skill in the ul in the new section #skills
const addSkill = function (skill) {
  const newLi = document.createElement("li");
  newLi.textContent = skill;

  // Apply the same font as the skills list under li
  newLi.style.fontFamily = "'Ysabeau Infant', sans-serif"; // Replace with the actual font family
  newLi.style.fontSize = "16px"; // Adjust font size if needed

  // Add a bullet point in front of each li
  newLi.style.listStyleType = "disc";

  skillSectionUl.appendChild(newLi); // Append the new li element to the ul
};

// Add event listener to the button in the new section #skills
btnSkill.addEventListener("click", function () {
  const skill = prompt("Veuillez entrer une nouvelle compétence");
  if (skill) {
    addSkill(skill); // Call the addSkill function with the entered skill
  }
});

//8. Ajouter une fonctionnalité qui affiche une confirmation à l'utilisateur lorsque le formulaire de contact est soumis avec succès.
const form = document.querySelector("form");
const btnContact = form.querySelector("button");

btnContact.addEventListener("click", function () {
  // Display a confirmation alert
  alert("Votre message a été envoyé avec succès !");

  // Clear input fields after successful submission
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector("textarea");

  // Reset the input values
  emailInput.value = "";
  messageInput.value = "";
});
