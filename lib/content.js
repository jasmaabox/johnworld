const config = {
  'siteName': 'Johnworld',
};

const content = {
  'name': 'John Smith',
  'profileImg': '/profile.jpg',
  'description': `hi im john. im a new grad looking for exciting opportunities as a 
  professional front-end web developer. my hobbies include skydiving and reading rfcs.`,
  'work': [
    {
      'startDate': '2012-01-03',
      'endDate': '2012-04-03',
      'title': 'Data Intern',
      'location': 'DC',
      'company': 'Company XYZ',
      'description': `
      - Sorted and cleaned data in Microsoft Excel.
      - Poured coffee for boss which increased work efficacy by 30x.`,
    },
    {
      'startDate': '2012-01-03',
      'endDate': '2012-04-03',
      'title': 'Research Intern',
      'location': 'DC',
      'company': 'Universe University Hooman Research Lab',
      'description': `
      - Worked with GANs to optimize protein folding and analyzed data with R and GeneFindr.
      - Increased folding productivity by 10x saving the human body $50,000.`,
    },
  ],
  'projects': [
    {
      'name': 'LinkedIn Bot',
      'description': `
      - Automatically answers messages on LinkedIn.
      - Literally copied from a Medium tutorial.`,
      'projectURL': 'https://example.com',
      'repositoryURL': null,
    },
  ],
  'social': {
    'github': 'https://github.com',
    'linkedin': 'https://linkedin.com',
    'facebook': 'https://facebook.com',
    'twitter': 'https://twitter.com',
  },
};

export { config, content };