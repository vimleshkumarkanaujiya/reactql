const githubQuery = {
    query: `
    {
        viewer {
            name
        repositories(first: 20) {
            nodes {
            name
            description
            id
            url
            }
        }
      }
    }
    `,
};

export default githubQuery;