import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({previewVideoLink}) => {
  return (
    <>
      <video autoPlay={true} muted={true} src={previewVideoLink} width="280" height="175" />
    </>
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
};

export default VideoPlayer;
