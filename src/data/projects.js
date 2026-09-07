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

import kreeCover from "../media/KreeCover.png";

export const projects = [
    {
        id: "kree",
        title: "Kree",
        blurb:
            "Turns any described location, real or imagined, into a lo-fi study scene — generated artwork paired with a matching soundtrack.",
        description:
            "Kree takes a written location — anywhere real or imagined — and builds an immersive study environment around it. One prompt generates a stylized lo-fi illustration through OpenAI's DALL·E 3 and a matching instrumental track through the ElevenLabs music API, then plays them back together as a fullscreen, looping ambient workspace. A React front end talks to an Express API that handles generation, Supabase authentication over secure HTTP cookies, and cloud storage — so signed-in users can save scenes to a personal collection and return to them later.",
        tags: ["React", "Express", "Supabase", "DALL·E 3", "ElevenLabs"],
        link: "https://kree-app.vercel.app/",
        github: "https://github.com/abirislam910/Kree",
        cover: kreeCover
    },
    {
        id: "project-two",
        title: "Project Two",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
        github: "",
        cover: null
    },
    {
        id: "project-three",
        title: "Project Three",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
        github: "",
        cover: null
    },
    {
        id: "project-four",
        title: "Project Four",
        blurb: "Add a one-line summary of what this project is.",
        description:
            "Replace this with the longer story: what you set out to build, the problem it solves, the stack you used, and what you learned along the way.",
        tags: [],
        link: "",
        github: "",
        cover: null
    },
];

export default projects;
