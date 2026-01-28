import Fuse from "fuse.js";

export const fuseOptions = {
    keys: [
        {
            name: "title",
            weight: 0.5,
        },
        {
            name: "headingText",
            weight: 0.4,
        },
        {
            name: "description",
            weight: 0.1,
        },
    ],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
};
