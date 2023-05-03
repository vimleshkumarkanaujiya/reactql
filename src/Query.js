const githubQuery = {
    query: `
    {
        viewer {
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