const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './src/pages/home.hbs'
  },
  {
    output: './ui-components/index.html',
    content: {
      title: 'UI Components',
      description: 'List of UI Components'
    },
    template: './src/pages/ui-components.hbs'
  },
  {
    output: './learn/index.html',
    content: {
      title: 'Learn template',
      description: 'Learn template'
    },
    template: './src/pages/learn.hbs'
  }
]

module.exports = pages
