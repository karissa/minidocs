var path = require('path')
var test = require('tape')

var createApp = require('../app')
var parseOptions = require('../lib/parse-options')

test('app.js returns choo app', function (t) {
  var app = createApp(parseOptions({
    contents: path.join(__dirname, 'fixtures/browser/contents.js'),
    markdown: path.join(__dirname, 'fixtures/browser/docs'),
    dir: __dirname
  }))
  t.ok(app)
  t.ok(app.start)
  t.ok(app.toString)
  t.end()
})

test('app.toString() returns html', function (t) {
  var options = parseOptions({
    contents: path.join(__dirname, 'fixtures/browser/contents.js'),
    markdown: path.join(__dirname, 'fixtures/browser/docs'),
    dir: __dirname
  })

  var app = createApp(options)
  var html = app.toString('/', options)
  t.ok(html)
  t.end()
})
