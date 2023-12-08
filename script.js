rightPanelElement = document.getElementById("right");

function setGradient(e) {
  var vw = window.innerWidth;
  var vh = window.innerHeight;

  var percentX = (e.clientX / vw) * 100;
  var percentY = (e.clientY / vh) * 100;

  gradientElement = document.getElementById("gradient");

  gradientElement.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(0,255,240,0.1) 0%, rgba(0,71,78,0.2) 30%)`;
}

document.addEventListener("mousemove", setGradient);

function setActiveClass() {
  var links = document.querySelectorAll(".link");

  links.forEach(function (link) {
    var targetId = link.getAttribute("href").substring(1);

    var targetElement = document.getElementById(targetId);

    var targetRect = targetElement.getBoundingClientRect();
    const projectEl = document.getElementById("experience");
    const top = projectEl.getBoundingClientRect().top;
    const bottom = projectEl.getBoundingClientRect().bottom;
    console.log(top, bottom);
    // Check if the target element is in view
    if (targetRect.top >= -20 && targetRect.top <= 160) {
      links.forEach(function (link) {
        link.classList.remove("active");
      });

      link.classList.add("active");
    }
  });
}

rightPanelElement.addEventListener("scroll", setActiveClass);

const translations = {
  en: {
    professionalTitle: "Web Developer",
    description:
      "I transform coffee into exceptional web sites and applications, and I have fun doing it.",
    aboutLink: "About",
    experienceLink: "Experience",
    projectsLink: "Projects",
    skillsLink: "Skills",
    aboutTitle: "about",
    bio: `Back in 2017, I was graduating from College with a Degree in Police
    Techniques. After a few years of unsuccessful applications and deep
    reflection, I realized I was meant for something more mentally
    stimulating. This is when I started exploring web development and
    programming, which evolved into a deep passion for it.
    <br />
    <br />
    In October 2023, I graduated from College with an Associate degree in
    Web Development and landed a position at Libeo, a reputable web
    solutions company in Quebec City. These days, I focus on building web
    applications with React or Vue.js on the front end, and PHP and
    Laravel on the back end.
    <br />
    <br />
    If I'm not building some type of software, I'm probably learning
    better ways to do it. If I'm not in front of a computer, I'm probably
    playing with my best buddy Cooper, a friendly German shepherd.`,
    experienceTitle: "experience",
    dateLibeoJob: "2023 - PRESENT",
    fullStackJobTitle: "Full-stack Web Developer",
    libeoJobDescription:
      "Developed high quality websites and applications for various major clients such as Québec Entrepreneurs Schools, Laval University, and Old Port of Montreal",
    mentorJobDescription: "Javascript and Algorithms Mentorship",
    osullivanCollege: "O'Sullivan College",
    osullivanJobDescription:
      "At the demand of the college administration, I accepted to mentor students having a hard time with programming to help them succeed. This greatly reinforced my understanding and my technical communication.",
    projectsTitle: "professional projects",
    eeqJobTitle: "Québec Entrepreneur Schools · Libéo",
    eeqProjectDescription:
      "An e-learning multi-platform for Entrepreneurs accross the province.",
    coopzoneTitle: "Coop-Zone - Laval University · Libéo",
    coopozoneProjectDescription:
      "A large scale e-commerce website developed in a microservices architecture.",
    vpmoTitle: "Old Port of Montreal · Libéo",
    vpmoProjectDescription:
      "A large corporate website made with Drupal CMS using custom modules.",
    skillsTitle: "technical skills",
    programmingLanguagesTitle: "Programming Languages",
    frameworksTitle: "Libraries and Frameworks",
    toolsTitle: "Tools and CMS",
    footerText: "Coded by me with the old school tech trio: ",
    and: ", and",
  },
  fr: {
    professionalTitle: "Développeur web",
    description:
      "Je transforme le café en sites et applications web exceptionnels, et je m'amuse à le faire.",
    aboutLink: "À propos",
    experienceLink: "Expérience",
    projectsLink: "Projets",
    skillsLink: "Compétences",
    aboutTitle: "à propos",
    bio: `En 2017, j'obtenais un diplôme d'études collégiales en techniques policières. Après quelques années dans le domaine, et de profondes
    réflexion, j'ai réalisé que j'étais destiné à quelque chose de plus stimulant mentalement. C'est à ce moment-là que j'ai commencé à explorer le développement Web et la
    programmation, qui a évolué vers une grande passion.
    <br />
    <br />
    En octobre 2023, j'ai obtenu mon diplôme d'études collégiales avec une AEC en
    Développement Web et j'ai décroché un poste chez Libeo, une entreprise Web réputée de solutions numériques à Québec. Ces jours-ci, je me concentre sur la création de sites Web et 
    d'applications avec React ou Vue.js pour le front-end, et PHP et
    Laravel pour le back-end.
    <br />
    <br />
    Si je ne construis pas un certain type de produit numérique, j'apprends probablement
    de meilleures façons de le faire. Si je ne suis pas devant mon ordinateur, je suis probablement entrain de 
    jouer avec mon meilleur ami Cooper, un sympathique berger allemand.`,
    experienceTitle: "expérience",
    dateLibeoJob: "2023 - PRÉSENT",
    fullStackJobTitle: "Développeur web Full-stack",
    libeoJobDescription:
      "Développement de sites Web et d'applications de haute qualité pour divers clients majeurs tels que les écoles d'entrepreneurs du Québec, l'Université Laval et le Vieux-Port de Montréal.",
    mentorJobDescription: "Mentorat en Javascript et algorithmes",
    osullivanCollege: "Collège O'Sullivan",
    osullivanJobDescription:
      "À la demande de la direction du collège, j'ai accepté d'encadrer des étudiants ayant des difficultés avec la programmation pour les aider à réussir. Cela a grandement renforcé ma compréhension et ma communication technique.",
    projectsTitle: "projets professionnels",
    eeqJobTitle: "Écoles des entrepreneurs du Québec · Libéo",
    eeqProjectDescription:
      "Une multiplateforme d'apprentissage en ligne pour les entrepreneurs de toute la province.",
    coopzoneTitle: "Coop-Zone - Université Laval · Libéo",
    coopozoneProjectDescription:
      "Un site e-commerce à grande échelle développé dans une architecture de microservices.",
    vpmoTitle: "Vieux port de Montréal · Libéo",
    vpmoProjectDescription:
      "Un grand site Web d'entreprise réalisé avec Drupal CMS à l'aide de modules personnalisés.",
    skillsTitle: "compétences",
    programmingLanguagesTitle: "Langages des programmation",
    frameworksTitle: "LIbrairies et Frameworks",
    toolsTitle: "Outils et CMS",
    footerText: "Codé par moi avec le trio technologique de la vieille école: ",
    and: ", et",
  },
};

function setLanguage(language, button) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    const translation = translations[language] && translations[language][key];

    if (translation) {
      if (key === "bio") {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  const buttons = document.querySelectorAll(".language-toggle button");
  buttons.forEach(function (btn) {
    btn.classList.remove("active-lang");
  });

  button.classList.add("active-lang");
}

const enButton = document.getElementById("enButton");
const frButton = document.getElementById("frButton");

enButton.addEventListener("click", function () {
  setLanguage("en", enButton);
});

frButton.addEventListener("click", function () {
  setLanguage("fr", frButton);
});
