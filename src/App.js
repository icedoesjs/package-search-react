import { Component } from 'react';
import SearchBox from './components/SetName/SearchBox.component';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

class App extends Component {
  render(){
    return (
    
      <div className="App">
      <>
        <MDBNavbar light bgColor='dark'>
          <MDBContainer fluid className='justify-content-center'>
              <MDBNavbarBrand tag="span" className='mb-0 h1 text-white'>NPM package search</MDBNavbarBrand>
            </MDBContainer>
          </MDBNavbar>
      </>
        <SearchBox default='react'/>
        <div class="header">
        </div>
      </div>
    );
  }
}

export default App;