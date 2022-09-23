import placeholder from './placeholder.jpg';


function getPeliculaImg(path) {
  return path ? 
    "https://image.tmdb.org/t/p/w300" + path 
    : placeholder;
    
}

export default getPeliculaImg;