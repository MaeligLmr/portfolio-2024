const projectsEn = [
    {
      id: "lical",
      title: "Lical",
      description: "Development of a management application as part of an internship at the Hôtel de la province Nord in New Caledonia.",
      presentation:
        "As part of an internship during my second year of MMI, I developed a web management application for a department of the province Nord in New Caledonia. Developing this application from scratch allowed me to strengthen my project management skills, especially in AGILE methodology, as well as my autonomy. Moreover, this internship enabled me to learn new languages (.Net and C#). Unfortunately, as the created application is internal to the province Nord's administration, I don't have a demo to present.",
      tags: ["C#", ".Net", "AGILE", "Internship"],
      images: [
        { src: "/images/lical.svg", alt: "lical", icon : true },
        { src: "/images/lical-liste.webp", alt: "list of people" },
        { src: "/images/lical-accueil.webp", alt: "homepage" },
        { src: "/images/lical-ajout.webp", alt: "add entity" },
      ],
      links: [
        { ref: "/docs/rapport_stage_maelig_lamarre.pdf", text: "Internship Report" },
      ],
      color: "#6aaa6a",
    },
    {
      id: "Air_hockey",
      title: "Air Hockey",
      description: "Creation of an Android application for Air Hockey",
      presentation:
        "During the second semester of my second year in MMI, I developed an Air Hockey application using Android Studio in a duo with a classmate. It allows 2 or 4 players and records games and players in a database for history and ranking. For this project, I handled the graphic/interface design and the database, strengthening my skills not only in mobile development but also in graphic design and UX.",
      tags: ["Android Studio", "Design", "Database", "GIT"],
      images: [
        { src: "/images/air-hockey.webp", alt: "Air Hockey" },
        { src: "/images/air-hockey-home.webp", alt: "Welcome screen" },
        { src: "/images/air-hockey-loby-2players.webp", alt: "Let's go - 2 players" },
        { src: "/images/air-hockey-game.webp", alt: "Game match" },
        { src: "/images/air-hockey-ranking.webp", alt: "Ranking" },
      ],
      links: [],
      color: "#cd80d3",
    },
    {
      id: "Back_office",
      title: "Back office - E-commerce",
      description: "Development of an e-commerce site back-office using React.js and PHP/Symfony.",
      presentation:
        "During the second semester of my second year in MMI, I developed an e-commerce site back-office in a duo with a classmate. This application, coded in React.js and Symfony, interacts with a REST API. This project enhanced my skills in React.js, Symfony, and versioning using Git.",
      tags: ["React.js", "Symfony", "REST API", "PHP", "GIT"],
      images: [
        { src: "/images/bo-desktop-list-articles.webp", alt: "back-office article list" },
        { src: "/images/bo-phone-list-articles.webp", alt: "back-office article list" },
        { src: "/images/bo-phone-add-article.webp", alt: "add an article" },
        { src: "/images/bo-desktop-update-article.webp", alt: "update a song" },
        { src: "/images/bo-phone-delete-article.webp", alt: "delete an article" },
      ],
      links: [
       // { ref: "", text: "Back-office Application" },
      ],
      color: "#7258dc",
    },
    {
      id: "Quik",
      title: "Quik",
      description: "Redesign of the graphic charter for a video editing application: Quik",
      presentation:
        <>As part of my first semester of the second year in MMI, I participated in a group of 5 people to redesign 
        the graphic charter of a video editing application: <a href='https://gopro.com/fr/fr/shop/quik-app-video-photo-editor' 
        target='_blank' className="text-blue-500 font-bold" title='Quik'> Quik</a>. This redesign was conducted after a study of competitors and communication objectives. 
        It was accompanied by the creation of an explainer video.</>,
      tags: ["Communication strategy", "Graphic charter", "Motion design", "Explainer"],
      images: [
        { src: "/images/quik.svg", alt: "quik", icon : true },
        { src: "/images/quik-logos-sur-fond-couleur.webp", alt: "logo on colored background" },
        { src: "/images/quik-logos-sur-fond-photo.webp", alt: "logo on photo background" },
        { src: "/images/quik-elt-graphiques.webp", alt: "graphic elements" },
        { src: "/images/quik-mock-up-web.webp", alt: "web mockups" },
        { src: "/images/quik-mock-up-physiques.webp", alt: "physical mockups" },
      ],
      links: [
        { ref: "/docs/quik_plan_de_communication.pdf", text: "Communication Plan" },
        { ref: "/docs/quik_charte_graphique", text: "Graphic Charter" },
      ],
      color: "#FFD900",
    },
    {
      id: "D_une_halle_a_l_autre",
      title: "From One Hall to Another",
      description: "Creation of a VR and mobile puzzle game for the opening of the new Gourmet Halls in Laval.",
      presentation:
        "As part of my first semester of the third year in MMI, I am developing a puzzle game within a group of 4 people. The game traces the history of the different halls in Laval for the opening of the new Gourmet Halls in Laval in late June 2024. This project was commissioned by Laval Patrimoine. For this project, I was further trained in the AGILE methodology, which we apply within my group. I started by working, alongside another member, on a detailed benchmark followed by the design and writing of the game scenario and puzzles. I also handle the creation of various 3D elements.",
      tags: ["IN PROGRESS", "VR", "Unity", "3D", "Blender", "AGILE"],
      images: [
        //{ src: "/images/d-une-halle-a-l-autre.svg", alt: "from one hall to another" },
        { src: "/images/enigme-carte.webp", alt: "puzzle 1: the map" },
        { src: "/images/enigme-maquette.webp", alt: "puzzle 2: model" },
        { src: "/images/enigme-chemin.webp", alt: "puzzle 3: consumption circuit" },
      ],
      links: [
        { ref: "/docs/halles-benchmark.pdf", text: "Benchmark" },
      ],
      color: "#b29972",
    },
    {
      id: "MMI_Next_Level",
      title: "MMI Next Level",
      description: "Development of a web application for finding post-MMI training programs.",
      presentation:
        "As part of my first semester of the third year in MMI, I am developing, within a group of 15 people, an application that helps MMI students in their search for further studies to find the most suitable one. For this project, we conducted extensive research to list the different master's programs related to MMI. Following this research, I participated in interviews with alumni who had difficulty finding programs last year to identify key elements for our application. We are now, with the developer team, building the application, which will interact with a REST API, using React.js and Node.js.",
      tags: ["IN PROGRESS", "React.js", "Node.js", "REST API"],
      images: [
        { src: "/images/mmi-next-level.webp", alt: "MMI Next Level", icon : true },
        { src: "/images/mmi-next-level-wireframe-accueil.webp", alt: "mmi next level masters after mmi" },
        { src: "/images/mmi-next-level-wireframe-formation.webp", alt: "mmi next level, training" },
      ],
      links: [
        //{ ref: "", text: "MMI Next Level" },
      ],
      color: "#5e3472",
    },
  ];
  
  export default projectsEn;
  