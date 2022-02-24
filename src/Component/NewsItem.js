import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description,imageUrl,source} = this.props
      console.log(source);
      const mystyle = {
          height:150,
      }
      const mystyle2 = {
        height:80,
    }
    return (
     <>
     <div className="card mx-3 my-3" id="card">
            <img src={imageUrl} className="card-img-top" alt="russia" style={mystyle}/>
            <div className="card-body">
                <h5 className="card-title" style={mystyle2}>{title}...</h5>
                <p className="card-text" >{description}...</p>
                <a href={source} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
      </div>
     </>
    )
  }
}

export default NewsItem
