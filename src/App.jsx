import { useState } from 'react'
import './App.css'
/*calling CardUsers from CardUsers.jsx*/
import CardUsers from './components/CardUsers'
import users from './json/users.json'
/*calling colors from colors.js*/
import colors from './utilities/colors'

function App() {
  
  /*step 1:Creating a function used for calculing a random element*/
  const getRandomElement= arr =>{
    /*If I multiply the random method by the length of the json file array, it will generate a ramdom object number from object 0 to the last object and to give us integers and not decimals, we use the Math.floor method, wrapping the method in parentheses previous*/
                              /*(object.method() 'this is used for the selection of random objects', this method generates a random number between 0 and 1, that is, from 0 to 0.99 but without considering 1 */
    const indexRandom=Math.floor(Math.random() * arr.length)
    return arr[indexRandom]    
}
  /*step 2:Only in this case we must create a parameter of what the random elements function returns, a parameter that we will call userRandom for example to be able to use it as the initial value of the useState*/
  let userRandom= getRandomElement(users)
  /*step 4:to get ramdon colors we can use the getElementRandom function*/
  let colorRandom= getRandomElement(colors)
  /*step 3:Creating useState used for calculing a random element*/
      /*[ parameter,    stade    ] = useState(initial valor)*/  
  const [randomUser, setRandomUser] = useState(userRandom)
  /*step 5:reusing the getRandomElement function we return the colors randomly*/
  const [randomColors, setRandomColors] = useState(colorRandom)
  /*Now we must do a useState*/
  /*step 6: create the <cardUsers><cardUsers/> in the className="App" div*/
  const objectStyle={
    backgroundColor: randomColors
  }
  const getRandomAll= () =>{
    userRandom= getRandomElement(users)
    colorRandom= getRandomElement(colors)
    setRandomUser(userRandom)
    setRandomColors(colorRandom)
  }
  return ( 
    <div className="App" style={objectStyle}>
      <CardUsers 
      randomUser={randomUser} 
      randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
