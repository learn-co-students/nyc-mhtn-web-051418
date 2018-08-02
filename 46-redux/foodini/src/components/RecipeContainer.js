import React, { Fragment } from 'react'
import Card from './Card';
import Button from './Button';

const RecipeContainer = (props) => {
  if (props.recipes.length === 0) {
    return (
      <Fragment>
        <p>Likes: {props.likes}</p>
        <p>Dislikes: {props.dislikes}</p>
      </Fragment>
    )
  } else {
    const renderCards = props.recipes.map((r, index) => (
      <Card
        key={r.id}
        id={r.id}
        title={r.title}
        ingredients={r.ingredients}
        thumbnail={r.thumbnail}
        description={r.href}
        order={index}
      />
    ));

    return (
      <Fragment>
        <div className="card-container" style={{backgroundColor: props.color}}>
          {renderCards}
        </div>

        <div className="button-container">
          <Button name="Like" handleClick={props.like} />
          <Button name="Dislike"  handleClick={props.dislike} />
        </div>
      </Fragment>
    )
  }
}

export default RecipeContainer;
