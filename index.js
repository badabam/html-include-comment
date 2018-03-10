#! /usr/bin/env node

const fs = require('fs')
const Q = require('q')
const path = require('path')
const pkg = require('./package.json')

const fs_readFile = Q.denodeify(fs.readFile)
const fs_writeFile = Q.denodeify(fs.writeFile)

const patterns = [/<!-- .* -->/g, /\/\* .* \*\//g]

const program = require('commander')

program
  .version(pkg.version, '-v, --version')
  .arguments('<srcFile> <targetFile>')
  .option('-s', '--silent', 'No output')
  .parse(process.argv)

const [srcFile, targetFile] = program.args

renderPage(srcFile, targetFile)

function renderPage(srcFile, targetFile) {
  const deferred = Q.defer()
  fs_readFile(srcFile, 'utf-8').done(data => {
    getMatches(data, deferred, targetFile)
  })

  return deferred.promise
}

function getMatches(mainFileData, deferred, targetFile) {
  if (!mainFileData.length) {
    deferred.reject('Empty file.')
  }

  const matches = patterns.reduce((prev, curr) => {
    const currentMatch = mainFileData.match(curr)
    if (currentMatch && currentMatch.length) {
      return prev.concat(currentMatch)
    }
    return prev
  }, [])

  let promises = []

  // beware: you can't use map to return promises
  matches.forEach(match => {
    const partialPath = match.split(' ')[1]
    const srcPath = path.dirname(path.join(process.cwd(), srcFile))

    const p = fs_readFile(path.join(srcPath, partialPath), 'utf8')

    p.done(partialData => {
      mainFileData = mainFileData.replace(match, partialData)
    })
    promises.push(p)
  })

  return Q.all(promises).done(() => {
    fs_writeFile(targetFile, mainFileData).done(() => {
      program.silent || console.log(`Rendered ${targetFile}`)
      deferred.resolve()
    })
  })
}
