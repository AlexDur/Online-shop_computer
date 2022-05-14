import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      //make props dynamic
      <input
        //className="search-box"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
