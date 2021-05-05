const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://admindani:admindani@cluster0.i5tvw.mongodb.net/myRecipeLab?retryWrites=true&w=majority';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
Recipe.create({
  title: "PB&J",
    level: "Easy ",
    ingredients: ['Peanut Butter', 'Bread', 'Jelly'],
    cuisine: 'American',
    dishType: 'test',
    duration: 123,
    creator: "test",
})

Recipe.insertMany(data)

Recipe.findByIdAndUpdate({title:' Rigatoni alla Genovese'},{duration:100})

Recipe.deleteOne({title:"Carrot Cake"})

mongoose.disconnect()
  })
   .catch(error => {
    console.error('Error connecting to the database', error);
  });

  

  