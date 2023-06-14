import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

class ImageResult extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      return (imageListContent = (
        <Grid container spacing={2}>
          {images.map((value) => (
            <Grid key={value.id} lg={4} sm={6} xs={12} item>
              <Typography gutterBottom variant="subtitle1" component="div">
                <div style={{display:'flex', gap:'10px'}} width='100%'>
                <div>Owner by <strong>{value.user}</strong></div>
                <div>Tags: <strong>{value.tags}</strong></div>
                </div>
              </Typography>
              <img src={value.largeImageURL} width='100%' alt={'img_'+value.id} />
            </Grid>
          ))}
        </Grid>
      ));
    } else {
      return imageListContent = null;
    }
  }
}
// ImageResult.prototype = {
//   images: PropTypes.array.isRequired,
// };
export default ImageResult;
