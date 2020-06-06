export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edbeed305042b7cdd8e18ab',
                  title: 'Sanity Studio',
                  name: 'yoga-with-susan-studio',
                  apiId: '8b729eca-9d21-4fd3-b468-eb2bc1a67eb3'
                },
                {
                  buildHookId: '5edbeed3c29469c3f2cddc88',
                  title: 'Blog Website',
                  name: 'yoga-with-susan',
                  apiId: '0253a033-7243-4a2e-bcc6-aa4ffa03c9d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magic8baller/yoga-with-susan',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://yoga-with-susan.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
