import React from 'react';
import requests from './request'
import './App.css';
import Row from './Row.js'
import Banner from './Banner'
import NavBar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <NavBar />   {/* calls the navigation bar component */}
      <Banner   />  {/* calls the banner component */}
      <Row title="Trending Now"  fetchUrl={requests.fetchTrending} isLarge/> {/*WE PASS THE TITLE AND FETCHURL TO THE ROW COMPONENT  */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
