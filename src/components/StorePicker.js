
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
 
  myInput = React.createRef();
  
  goToStore = (e) => {
    e.preventDefault();
    // Get text from input
     const storeName = this.myInput.value.value;
    // Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);

  }
  
  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input 
            type="text" 
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()} 
          />
          <button type="submit"> Visit Store </button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;