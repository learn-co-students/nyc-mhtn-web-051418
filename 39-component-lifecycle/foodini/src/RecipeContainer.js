import React, { Fragment } from 'react'
import Card from './Card';
import Button from './Button';
import UUID from 'uuid'

class RecipeContainer extends React.Component{

  renderCards() {
    return this.props.recipes.map((r, index) => (
      <Card
        key={UUID()}
        title={r.title}
        ingredients={r.ingredients}
        thumbnail={r.thumbnail}
        description={r.href}
        order={index}
      />
    ));
  }

  render(){
    return this.props.recipes.length === 0 ?
            <Fragment>
              <p>Likes: {this.props.likes}</p>
              <p>Dislikes: {this.props.dislikes}</p>
            </Fragment>
          :
            <Fragment>
              <div className="card-container">
                {this.renderCards()}
              </div>

              <div className="button-container">
                <Button name="Like" handleClick={this.props.like} />
                <Button name="Dislike"  handleClick={this.props.dislike} />
              </div>
            </Fragment>
  }
}

export default RecipeContainer