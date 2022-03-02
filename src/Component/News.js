import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("I am in constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title=`${this.Capitalize(this.props.category)}- NewsBItes`
  }
  
  updateNews = async () => {
    this.props.setProgress1(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af5292dab1a74ac69a0569f0c65d34d0&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.setProgress1(30)
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress1(50)
    let parsdata = await data.json();
    this.props.setProgress1(70)
    console.log(parsdata);
    this.setState({
      loading: false,
      articles: parsdata.articles,
      totalResults: parsdata.totalResults,
    });
    this.props.setProgress1(100)
  };

  async componentDidMount() {
    this.updateNews();
  }
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  fetchMoreData = async () => {
    this.setState({
        page: this.state.page + 1
    })
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af5292dab1a74ac69a0569f0c65d34d0&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({
      articles: this.state.articles.concat(parsdata.articles),
      totalResults: parsdata.totalResults,
    });   
  };
  render() {
    return (
    <>
       <div className="container">
          <center> 
                <h1 className="my-3 mx-3">
                      NewsBites- Top {this.Capitalize(this.props.category)} Headlines
               </h1>
           </center>
          { this.state.loading && <Spinner />}
        </div>             
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          // loader={this.state.loading}
        >
        <div className="container">
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    key={element.url}
                    title={element.title?element.title.slice(0, 50):"title"}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : element.description
                    }
                    imageUrl={element.urlToImage}
                    source={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div></div>
            </InfiniteScroll>
            {this.state.articles.length === 0 && !this.state.loading && (
            <h1 className="text-center ">No Contents !!</h1>
          )}
       </>
        /* <div className="container d-flex justify-content-between">
          {this.state.articles.length > 0 && (
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &laquo; Previous
            </button>
          )}
          {this.state.articles.length === 0 && (
            <h1 className="nocontents">No Contents !!</h1>
          )}
          {this.state.articles.length > 0 && (
            <button
             disabled={this.state.page +1 >Math.ceil(this.state.totalResults/20)}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &raquo;
            </button>
          )}
        </div> */
      
    );
  }
}
