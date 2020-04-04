import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// async and await is an easy way to get response from request


 class App extends React.Component {
     state = {images: []};
     onSearchSubmit = async (term)  => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
         });
        //this response is use when you work with promise
        // .then(response => {
        //     console.log(response.data.results);
        // });
        this.setState({images: response.data.results});
     }

     render() {
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit= {this.onSearchSubmit}/>
            <ImageList images = {this.state.images}/>
        </div>
    );
  }
}


export default App;  