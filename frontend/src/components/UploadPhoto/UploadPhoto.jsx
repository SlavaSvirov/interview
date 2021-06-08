import React, { useState } from 'react';
import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';

const UploadPhoto = ({ avatar }) => {
  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div>

      <img src={avatar} alt="avatar" />
      <input
        className="input"
        type="file"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default UploadPhoto;
