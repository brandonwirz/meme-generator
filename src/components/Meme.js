import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  //   function handleClick() {
  //     console.log("I was clicked")
  //   }
  //   function handleOnMouseOver() {
  //     console.log("MouseOver")
  //   }
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText: "",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setallMemeImages] = React.useState(memeData);

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme, randomImage.url
    }))
  }

  // prettier-ignore

  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top-text" />
        <input className="form-input" type="text" placeholder="Bottom-text" />
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
    </main>
  )
}
