import React, {useState} from "react";
import ReactPlayer from "react-player"

function FavoriteCards({meal, handleDelete}) {
    

    const [videoDisplay, setVideoDisplay] = useState(false)
    const [instructionDisplay, setInstructionDisplay] = useState(false)
    const [ingredientsDisplay, setIngredientsDisplay] = useState(false)

    function handleVideoClick(){
        setVideoDisplay(!videoDisplay)

    }

    function hideVideoDisplay(){
        setVideoDisplay(!videoDisplay)
    }

    function handleInstructions(){
        setInstructionDisplay(!instructionDisplay)
    }
    function handleIngredients(){
        setIngredientsDisplay(!ingredientsDisplay)
    }

    const getIngredients = []

    for(let i=1; i<=20; i++){
      if((meal[`strIngredient${i}`] ===  "" && meal[`strMeasure${i}`] ===  "") || (meal[`strIngredient${i}`] === null && meal[`strMeasure${i}`] === null)){
        break
      } getIngredients.push(<li>{meal[`strMeasure${i}`]} {meal[`strIngredient${i}`]}</li>)
    }


  return (
    <div className="faveCard">
    <h2>{meal.strMeal}</h2>
    {videoDisplay ? <ReactPlayer className="fave-video"  url={meal.strYoutube}/> : <img className="fave-image" onClick={handleVideoClick} height="300" width="300" src={meal.strMealThumb} alt={meal.strMeal}/>  }
    {videoDisplay ? null : <h3>Click picture to see the recipe video!</h3>}
    {videoDisplay? <span><button onClick={hideVideoDisplay}>Hide Video</button></span> : null}
    <button  onClick={()=>handleDelete(meal)}>🗑️</button>
    <h4 className="new-recipe-click" onClick={handleIngredients}>{ingredientsDisplay ? "Hide ingredients!" : "Click for ingredients!"}</h4>
   {ingredientsDisplay ? <ul className="fave-ingredients"> {getIngredients} </ul> : null }
   {/* {ingredientsDisplay ? <ul> { measurements} </ul> : null } */}
    <h4 className="new-recipe-click" onClick={handleInstructions}>{instructionDisplay? "Hide instructions!" : "Click for instructions!"}</h4> 
    {instructionDisplay ? <p>{meal.strInstructions}</p> : null}
    </div>
  )
}

export default FavoriteCards;