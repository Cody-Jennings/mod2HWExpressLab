// Build 10 Routes and a view engine, say anything you want
// Make 2 different templates, and use them both in different routes ( you can only have 1 view engine but multiple templates )


const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs') 
app.engine('one', (filePath, options, callback) => { // define the view engine called
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#facts#', '<h1>' + options.facts + '</h1>').replace('#content#','<div>'+ options.content + '</div>', '<div>'+ options.facts + '</div>'  )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'one') 



  app.get('/path1', (req, res) => {
    res.render('blueprint', { title: 'You have chosen path 1', message: 'Goku!', content: 'Show them what a Saiyan is made of!', facts: `Goku is based on the Monkey King from “Journey to the West”.` })
  })
  
  app.get('/path2', (req, res) => {
    res.render('template', { title: 'You have chosen path 2', message: 'Doom Slayer!', content: 'Your Affinity For Guns Is Apparent.' })
  })
  
  app.get('/path3', (req, res) => {
    res.render('blueprint', { title: 'You have chosen path 3', message: 'Kratos!', content: 'Zeus! Your Son Has Returned. I Bring The Destruction Of Olympus!', facts: `Kratos Is Based On Cratus From Greek Mythology, And His Name Means "Power".` })
  })
  
  app.get('/path4', (req, res) => {
    res.render('template', { title: 'You have chosen path 4', message: 'Naruto!', content: 'If you don`t like the hand that fate`s dealt you with, fight for a new one.' })
  })

  app.get('/path5', (req, res) => {
    res.render('blueprint', { title: 'You have chosen path 5', message: 'Asta!', content: 'My magic is never giving up!', facts: `Asta is the character most similar to the shows creator.` })
  })

  app.get('/path6', (req, res) => {
    res.render('template', { title: 'You have chosen path 6', message: 'T-Rex!', content: 'RAWWWWR!!!!!!!!' })
  })

  app.get('/path7', (req, res) => {
    res.render('blueprint', { title: 'You have chosen path 7', message: 'Luffy!', content: 'I`ve set myself to become the King of the Pirates… and if I die trying… then at least I tried.', facts: `According to "Oda" One Piece creater, "Luffy is my ideal child. I wish all children could be like him". ` })
  })

  app.get('/path8', (req, res) => {
    res.render('template', { title: 'You have chosen path 8', message: 'Ichigo!', content: 'Become strong not just for your own sake, but for your friends.' })
  })

  app.get('/path9', (req, res) => {
    res.render('blueprint', { title: 'You have chosen path 9', message: 'All Might!', content: 'I AM HERE!!!!', facts: `My Hero Academia creator based All Might off of Goku from Dragon Ball/Z franchise.  ` })
  })

  app.get('/path10', (req, res) => {
    res.render('template', { title: 'You have chosen path 10', message: 'Doc Holliday!', content: 'I`m your huckleberry.' })
  })


app.listen(port, function () {
    console.log('Listening on port 3000');
  });