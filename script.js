const chapters = [
    {
        number: "01",
        title: "Chapter 1",
        description: "Introduction to Artificial Intelligence and its fundamental concepts."
    },
    {
        number: "02",
        title: "Chapter 2",
        description: "Explore the second lecture and its key learning materials."
    },
    {
        number: "03",
        title: "Chapter 3",
        description: "Discover important principles and applications of AI."
    },
    {
        number: "04",
        title: "Chapter 4",
        description: "Understand the technologies behind intelligent systems."
    },
    {
        number: "05",
        title: "Chapter 5",
        description: "Explore another essential area of Artificial Intelligence."
    },
    {
        number: "06",
        title: "Chapter 6",
        description: "Learn about advanced concepts and AI applications."
    },
    {
        number: "07",
        title: "Chapter 7",
        description: "Complete your AI Fundamentals learning journey."
    },
    {
        number: "08",
        title: "Chapter 8",
        description: "Expand your knowledge with new concepts, techniques, and AI innovations."
    }
];

const chapterGrid = document.getElementById("chapterGrid");

chapterGrid.innerHTML = chapters.map(chapter => `
    <a href="chapters/chapter${Number(chapter.number)}.html"
       class="chapter-card">

        <div class="chapter-number">${chapter.number}</div>

        <h3>${chapter.title}</h3>

        <p>${chapter.description}</p>

        <span class="chapter-link">Explore Chapter →</span>

    </a>
`).join("");
