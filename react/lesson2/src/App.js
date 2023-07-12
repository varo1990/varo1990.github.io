import React, {Component} from 'react';
import Header from "./components/Header";
import Books from "./components/Books";
import BrandList from "./components/BrandList";

class App extends Component {
    render() {
        return (
            <div>
              <Header/>
                <Books/>
                <BrandList/>
            </div>
        );
    }
}

export default App;