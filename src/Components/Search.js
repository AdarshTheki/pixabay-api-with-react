import React, { Component } from "react";
import ImageResult from "./ImageResult.js";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";

const CountData = [
  {
    value: "05",
    label: "Five",
  },
  {
    value: "10",
    label: "Ten",
  },
  {
    value: "20",
    label: "Twenty",
  },
  {
    value: "30",
    label: "Thirty",
  },
];

class Search extends Component {
  state = {
    searchText: "",
    amount: "6",
    apiURL: "https://pixabay.com/api",
    apiKey: "36826385-e8e9d4ec735b36934b6ae908c",
    image: [],
  };
  
  // On Change the Text
  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ image: [] });
      } else {
        axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ image: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  // On Change the Amount
  onAmountChange = (e, index, value) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.image);
    return (
      <div style={{ display: "grid", gap: "10px" }}>
        <TextField
          name='searchText'
          value={this.state.searchText}
          onChange={this.onTextChange}
          label='Search For Image'
          variant='standard'
          fullWidth={true}
        />
        <br />
        <TextField
          fullWidth={true}
          name='amount'
          select
          label='Select'
          value={this.state.amount}
          onChange={this.onAmountChange}>
          {CountData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        {this.state.image.length > 0 ? (
          <ImageResult images={this.state.image} />
        ) : null}
      </div>
    );
  }
}
export default Search;
