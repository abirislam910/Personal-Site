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
//       link: "https://...",       // optional, live site button in the modal
//       github: "https://...",     // optional, source button in the modal
//       cover: importedImage,      // optional, falls back to the gradient
//   }

import kreeCover from "../media/KreeCover.png";
import predKubeCover from "../media/PredKubeCover.png";
import dataBullCover from "../media/DataBullCover.png";

export const projects = [
    {
        id: "databull",
        title: "DataBull",
        blurb:
            "An industrial time-series platform: a FastAPI service over TimescaleDB, with a typed React dashboard for charting device readings.",
        description:
            `DataBull ingests, stores, and serves industrial sensor telemetry. The backend is a Python 3.12 FastAPI
            service using async SQLAlchemy and Alembic operating over a Postgres TimescaleDB, exposing per-user device 
            registration and reading queries behind JWT auth. Its security model involves argon2 password hashing,
            access tokens held only in React context rather than localStorage (to avoid XSS leaks), and uniform error
            and login responses that stay byte-identical whether the password is wrong or the account does not
            exist. The frontend is React and TypeScript on Vite, pairing TanStack Query, Radix and Tailwind
            components, and Recharts plots with an API client typed from the service's own OpenAPI schema. Currently 
            working on an AI operator's assistant that answers natural-language questions through Claude tool-calling`,
        tags: ["FastAPI", "Postgres", "TimescaleDB", "React", "TypeScript", "Docker"],
        link: "",
        github: "https://github.com/abirislam910/DataBull",
        cover: dataBullCover
    },
    {
        id: "kree",
        title: "Kree",
        blurb:
            "Turns any described location, real or imagined, into a lo-fi study scene: generated artwork paired with a matching soundtrack.",
        description:
            `Kree takes a user-input location and builds an immersive study environment around it. 
            One prompt generates a stylized lo-fi illustration through OpenAI's DALL·E 3 and a matching instrumental track through the 
            ElevenLabs music API, then plays them back together as a fullscreen, looping ambient workspace. A React front end talks to an 
            Express API that handles generation, Supabase authentication over HTTP cookies, and Supabase cloud storage so users 
            can save scenes to a personal collection and return to them later. The live site is hosted on Vercel, with a backend hosted
            on Heroku.`,
        tags: ["React", "Express", "Supabase", "DALL·E 3", "ElevenLabs"],
        link: "https://kree-app.vercel.app/",
        github: "https://github.com/abirislam910/Kree",
        cover: kreeCover
    },
    {
        id: "predictive-kubernetes",
        title: "Predictive Kubernetes",
        blurb:
            "A predictive autoscaler for Kubernetes that forecasts memory demand and scales pods before the load arrives, not after.",
        description:
            `A five-person project in collaboration with Red Hat and Boston University SPARK!, replacing Kubernetes' reactive 
            Horizontal Pod Autoscaler with one 
            that scales ahead of demand. We instrumented local kind clusters running a containerized CPU-bound service, drove 
            them with scripts that simulated a week of peak and off-peak traffic, and collected roughly 60,000 rows of CPU, 
            memory, and replica-count metrics from the Kubernetes Metrics API. On that data we weighed a Wiener-process 
            model, which prices overprovisioning against underprovisioning, against classical time-series forecasting, 
            where a rolling ARIMA(5,1,0) reached an RMSE of 11.90 against a naive baseline of 12.04. The result is a hybrid
            system: a Python analyzer publishes a Kubernetes Custom Resource carrying the predicted replica count, and a Go
            operator built with Kubebuilder watches for it and rescales the deployment.`,
        tags: ["Python", "Go", "Kubernetes", "Docker"],
        link: "",
        github: "",
        cover: predKubeCover
    }
];

export default projects;
