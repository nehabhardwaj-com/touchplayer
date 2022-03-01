import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af5292dab1a74ac69a0569f0c65d34d0&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({
      articles: parsdata.articles,
      totalResults: parsdata.totalResults,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
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
        <h1 className="my-3 mx-3">
              <center>NewsBites- Top {this.Capitalize(this.props.category)} Headlines</center></h1></div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
