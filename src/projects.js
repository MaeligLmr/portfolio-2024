const projectsFr = [
  {
    id: "lical",
    title: "Lical",
    description: "Développement d'une application de gestion dans le cadre d'un stage à l'Hôtel de la province Nord de Nouvelle Calédonie.",
    presentation:
      "Dans le cadre d'un Stage lors de ma deuxième année de MMI, j'ai développé une application web de gestion pour une direction de la province Nord de Nouvelle Calédonie. Le développement de cette application de A à Z m'a permis de renforcer mes compétences de gestion de projet, notamment en méthode AGILE, mais aussi mon autonomie. Surtout, ce stage m'a permis de me former à de nouveaux langages (.Net et C#). Malheureusement, l'application créée étant interne à l'administration de la province Nord, je n'ai pas de démo à présenter.",
    tags: ["C#", ".Net", "AGILE", "Stage"],
    images: [
      { src: "/images/lical.svg", alt: "lical", icon : true },
      { src: "/images/lical-liste.webp", alt: "liste de personnes" },
      { src: "/images/lical-accueil.webp", alt: "accueil" },
      { src: "/images/lical-ajout.webp", alt: "ajouter une entité" },
    ],
    links: [
      { ref: "/docs/rapport_stage_maelig_lamarre.pdf", text: "Rapport de Stage" },
    ],
    color: "#6aaa6a",
  },
  {
    id: "Air_hockey",
    title: "Air Hockey",
    description: "Réalisation d'une application Android de Air Hockey",
    presentation:
      "Dans le cadre de mon second semestre de deuxième année MMI, j'ai réalisé une application Android Studio de Air Hockey en duo avec un camarade. Elle permet de jouer à 2 ou 4 joueurs et enregistre les parties et les joueurs dans une base de données permettant d'avoir un historique et un classement. Pour ce projet, je me suis occupée de la partie graphisme/interfaces et de la base de données. Il m'a donc permis de renforcer mes compétences non seulement de développement mobile, mais aussi de création graphique et UX.",
    tags: ["Android Studio", "Graphisme", "BDD", "GIT"],
    images: [
      { src: "/images/air-hockey.webp", alt: "Air Hockey" },
      { src: "/images/air-hockey-home.webp", alt: "Bienvenue" },
      { src: "/images/air-hockey-loby-2players.webp", alt: "Let's go - 2 joueurs" },
      { src: "/images/air-hockey-game.webp", alt: "Match" },
      { src: "/images/air-hockey-ranking.webp", alt: "Classement" },
    ],
    links: [],
    color: "#cd80d3",
  },
  {
    id: "Back_office",
    title: "Back office - E-commerce",
    description: "Développement d'un back office de site e-commerce en React.js et PHP/Symphony.",
    presentation:
      "Dans le cadre de mon second semestre de deuxième année MMI, j'ai réalisé une application web de gestion back office de site E-commerce en duo avec un camarade. Cette application codée en React.js et Symphony manipule une API REST. Ce projet a renforcé mes compétences donc en React.js, Symphony, mais aussi en versioning via Git.",
    tags: ["React.js", "Symphony", "API REST", "PHP", "GIT"],
    images: [
      { src: "/images/bo-desktop-list-articles.webp", alt: "back-office liste articles" },
      { src: "/images/bo-phone-list-articles.webp", alt: "back-office liste articles" },
      { src: "/images/bo-phone-add-article.webp", alt: "ajouter un article" },
      { src: "/images/bo-desktop-update-article.webp", alt: "modifier une musique" },
      { src: "/images/bo-phone-delete-article.webp", alt: "supprimer un article" },
    ],
    links: [
     // { ref: "", text: "Application Back-office" },
    ],
    color: "#7258dc",
  },
  {
    id: "Quik",
    title: "Quik",
    description: "Refonte de la charte graphique d'une application de montage : Quik",
    presentation:
      <>Dans le cadre de mon premier semestre de deuxième année MMI, j'ai réalisé, au sein d'un groupe de 5 personnes, 
      la refonte de la charte graphique d'une application de montage : 
      <a href='https://gopro.com/fr/fr/shop/quik-app-video-photo-editor' target='_blank' className="text-blue-600 font-bold" title='Quik'> Quik </a>. 
      Cette refonte a été faite à la suite d'une étude de la concurrence et des objectifs de communication. Elle 
      a également été accompagnée de la réalisation d'un explainer.</>,
    tags: ["Stratégie de communication", "Charte graphique", "Motion design", "Explainer"],
    images: [
      { src: "/images/quik.svg", alt: "quik", icon:true },
      { src: "/images/quik-logos-sur-fond-couleur.webp", alt: "logo sur fond couleur" },
      { src: "/images/quik-logos-sur-fond-photo.webp", alt: "logo sur fond photo" },
      { src: "/images/quik-elt-graphiques.webp", alt: "éléments graphiques" },
      { src: "/images/quik-mock-up-web.webp", alt: "mock ups web" },
      { src: "/images/quik-mock-up-physiques.webp", alt: "mock ups physiques" },
    ],
    links: [
      { ref: "/docs/quik_plan_de_communication.pdf", text: "Plan de communication" },
      { ref: "/docs/quik_charte_graphique.pdf", text: "Charte graphique" },
    ],
    color: "#FFD900",
  },
  {
    id: "D_une_halle_a_l_autre",
    title: "D'une Halle à l'autre",
    description: "Réalisation d'un jeu d'énigme VR et mobile à l'occasion de l'ouverture des nouvelles Halles Gourmandes à Laval.",
    presentation:
      "Dans le cadre de mon premier semestre de troisième année MMI, je développe, au sein d'un groupe de 4 personnes, un jeu d'énigmes retraçant l'histoires des différentes halles à Laval à l'occasion de l'ouverture des Nouvelles Halles Gourmandes à Laval fin Juin 2024. Ce projet nous est demandé par Laval Patrimoine, notre commanditaire. Pour ce projet, j'ai été formé davantage à la méthode AGILE que nous appliquons au sein de mon groupe. Pour ma part j'ai commencé par faire, en duo avec un autre membre de mon groupe, un benchmark détaillé poursuivi de la conception et rédaction du scénario de jeu et des énigmes. Je m'occupe également de la réalisation des différents éléments 3D.",
    tags: ["EN COURS", "VR", "Unity", "3D", "Blender", "AGILE"],
    images: [
      //{ src: "/images/d-une-halle-a-l-autre.svg", alt: "d'une halle à l'autre" },
      { src: "/images/enigme-carte.webp", alt: "énigme 1 : la carte" },
      { src: "/images/enigme-maquette.webp", alt: "énigme 2 : maquette" },
      { src: "/images/enigme-chemin.webp", alt: "énigme 3 : circuit de consommation" },
    ],
    links: [
      { ref: "/docs/halles-benchmark.pdf", text: "Benchmark" },
    ],
    color: "#b29972",
  },
  {
    id: "MMI_Next_Level",
    title: "MMI Next Level",
    description: "Développement d'une application web de recherche de formations post-mmi",
    presentation:
      "Dans le cadre de mon premier semestre de troisième année MMI, je développe, au sein d'un groupe de 15 personnes, une application aidant les MMI à la recherche d'une future formation à trouver celle qui leur convient. Pour ce projet, nous avons dû réaliser un gros travail de recherche afin de répertorier les différents masters en lien avec MMI. Suite à cette recherche, j'ai participé à une tournée d'interview d'anciens élèves ayant été dans la difficulté à trouver des formations l'an passé afin de nommer les éléments à mettre en avant dans notre application. Nous sommes maintenant, avec l'équipe de développeurs, en train de développer l'application qui manipulera une API REST, en React.js et Node.js.",
    tags: ["EN COURS", "React.js", "Node.js", "API REST"],
    images: [
      { src: "/images/mmi-next-level.webp", alt: "MMI Next Level", icon : true },
      { src: "/images/mmi-next-level-wireframe-accueil.webp", alt: "mmi next level master après mmi" },
      { src: "/images/mmi-next-level-wireframe-formation.webp", alt: "mmi next level, formation" },
    ],
    links: [
     // { ref: "", text: "MMI Next Level" },
    ],
    color: "#5e3472",
  },
];

export default projectsFr;
