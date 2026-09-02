// Everything the Projects section renders comes from this array — the carousel
// cards and the detail modal both read from it. Add or remove entries freely;
// the carousel adapts.
//
// Full shape of an entry:
//   {
//       id: "unique-slug",
//       title: "Project name",
//       blurb: "One line shown on the card.",
//       description: "The longer write-up shown in the modal.",
//       tags: ["React", "Node"],   // optional, rendered as pills
//       link: "https://...",       // optional, adds a button in the modal
//   }

export const projects = [
    {
        id: "project-one",
        title: "Project One",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
    },
    {
        id: "project-two",
        title: "Project Two",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
    },
    {
        id: "project-three",
        title: "Project Three",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
    },
    {
        id: "project-four",
        title: "Project Four",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
    },
];

export default projects;
