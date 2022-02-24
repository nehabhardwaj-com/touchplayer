import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description,imageUrl,source} = this.props
      console.log(source);
      const mystyle = {
          height:150,
          padding :0,
          margin:0,
      }
      const mystyle2 = {
        height:80,
    }
    return (
     <>
     <div className="card  my-3" id="card">
     <a href={source} target='_blank'><img src={imageUrl?imageUrl:"https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-mini-760x380.jpeg"} className="card-img-top" alt="russia" style={mystyle}/></a>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text" >{description}...</p>
                <a href={source} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
      </div>
     </>
    )
  }
}

export default NewsItem
