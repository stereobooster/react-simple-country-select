const fs = require('fs')
const countries = require('world-countries/dist/countries.json')

const output = JSON.stringify(
  countries
    .filter(({independent}) => independent)
    .map(({name: {common}, cca2, flag, callingCode: [code]}) => ({
      name: common,
      cca2,
      flag,
      code,
    })),
)

fs.writeFile('src/countries.json', output, 'utf8', err => {
  if (err) return console.log(err)
  console.log('The file was saved!')
})
