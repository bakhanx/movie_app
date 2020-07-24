import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async - await // getMovies function 호출하는데 기다려야 한다는 것을 알림
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
             const { isLoading, movies } = this.state;
             //자바스크립트에서는 class -> className
             return (
               <section className="container">
                 {isLoading ? (
                   <div className="loader">
                     <span className="loader__text">Loading...</span>
                   </div>
                 ) : (
                   <div className="movies">
                     {movies.map(movie => (
                       <Movie
                         key={movie.id}
                         id={movie.id}
                         year={movie.year}
                         title={movie.title}
                         summary={movie.summary}
                         poster={movie.medium_cover_image}
                         genres={movie.genres}
                       />
                     ))}
                   </div>
                 )}
               </section>
             );
           }
}

export default Home;
