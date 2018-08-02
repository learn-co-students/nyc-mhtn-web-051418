// load data, pass it in as a prop, it can after auth
import React, { Component } from 'react';

/*
  1. Understand that you need to pass props along
    - If you take a component, and then render it in a new component, you lose props.
  2. The thing you return, is a new class Component
    - React will use this to render a component.
    - That's why you can put it in a variable.
    - Also why you can just export it.
  3. What to abstract???
    - What functionality do I need to add in multiple components?
    - Auth: something that redirects when not authed
    - Loading: we had a ton of components that needs to load data when rendered
    - Ads: withAds
  4. Just practice.
*/
function withLoading(WrappedComponent, loadData, isAuthed) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
      }
    }

    componentDidMount(){
      // this.loadRecipes(this.state.userId);
      if ((isAuthed && this.props.userId) || !isAuthed) {
        loadData(this.props.userId)
          .then(res => {
            this.setState({
              loadedData: res,
              loading: false,
            })
          })
      } else {
        this.setState({
          loading: false,
        })
      }
    }

    render() {
      if (this.state.loading) {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        return <WrappedComponent {...this.props} initialData={this.state.loadedData} />
      }
    }
  }
}

export default withLoading;
