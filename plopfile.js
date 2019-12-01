/* eslint-disable func-names */
module.exports = plop => {
  plop.setHelper('date', function() {
    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth() + 1
    const fullYear = today.getFullYear()
    const currentTime = today.toLocaleTimeString()
    return `${date}/${month}/${fullYear} ${currentTime}`
  })

  plop.setGenerator('component', {
    description: 'This is a ReactJS Component Scaffolding file',
    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of your Component'
      },
      {
        type: 'list',
        name: 'type',
        choices: ['Component', 'With State', 'Lerna Mono Repo'],
        message: 'What type of Component do you want to create ?'
      },
      {
        type: 'input',
        name: 'ComponentAuthor',
        message: 'Who is the Author of this Component'
      }
    ],
    actions: data => {
      const folderPath =
        data.type === 'Component' || data.type === 'With State'
          ? './src/components/{{pascalCase ComponentName}}'
          : './packages/{{pascalCase ComponentName}}'

      const actions = [
        {
          type: 'add',
          path: `${folderPath}/{{pascalCase ComponentName}}.scss`,
          templateFile: './template/component.scss.hbs'
        },
        {
          type: 'add',
          path: `${folderPath}/AUTHOR.md`,
          templateFile: './template/AUTHOR.hbs'
        }
      ]

      if (data.type === 'Component') {
        actions.push({
          type: 'add',
          path: `${folderPath}/index.js`,
          templateFile: './template/presentational-component.hbs'
        })
        actions.push({
          type: 'add',
          path: `${folderPath}/{{pascalCase ComponentName}}.spec.js`,
          templateFile: './template/presentational-component.spec.hbs'
        })
      } else if (data.type === 'With State') {
        actions.push({
          type: 'add',
          path: `${folderPath}/index.js`,
          templateFile: './template/container-component.hbs'
        })
        actions.push({
          type: 'add',
          path: `${folderPath}/{{pascalCase ComponentName}}.spec.js`,
          templateFile: './template/container-component.spec.hbs'
        })
      } else {
        actions.push({
          type: 'add',
          path: `${folderPath}/index.js`,
          templateFile: './template/presentational-component.hbs'
        })
        actions.push({
          type: 'add',
          path: `${folderPath}/package.json`,
          templateFile: './template/package.json.hbs'
        })
        actions.push({
          type: 'add',
          path: `${folderPath}/{{pascalCase ComponentName}}.spec.js`,
          templateFile: './template/presentational-component.spec.hbs'
        })
      }
      return actions
    }
  })
}
