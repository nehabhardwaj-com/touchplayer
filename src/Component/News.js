import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        console.log("I am in constructor");
        this.state = {
            articles: [],
            loading: false,
            page :1,
        }
    }
   
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=af5292dab1a74ac69a0569f0c65d34d0&page=1`
        let data= await fetch(url)
        let parsdata = await data.json();
        console.log(parsdata);
        this.setState({articles:parsdata.articles})
    }
    handlePrevClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=af5292dab1a74ac69a0569f0c65d34d0&page=${this.state.page-1}`
        let data= await fetch(url)
        let parsdata = await data.json();
        console.log(parsdata);
        this.setState({
            articles:parsdata.articles,
            page:this.state.page-1
        })
     }
     handleNextClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=af5292dab1a74ac69a0569f0c65d34d0&page=${this.state.page+1}`
        let data= await fetch(url)
        let parsdata = await data.json();
        console.log(parsdata);
        this.setState({
            articles:parsdata.articles,
            page:this.state.page+1
        })
    }
    render() {
    return (
      <>    
        <div className="container">
            <h1 className="my-3 mx-3">NewsBites- TOP HEADINGS</h1>
            <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4">
                    <NewsItem key={element.url} title={element.title.slice(0, 50)} description={element.description?element.description.slice(0,88):element.description} imageUrl={element.urlToImage} source={element.url}/>
                </div>
    })}
              </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
      </div>
      </>
    )
  }
}
