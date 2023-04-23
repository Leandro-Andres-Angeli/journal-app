export const fileUpload = async (file) => {
  //return url de la image
  const urlCloudinary =
    'https://api.cloudinary.com/v1_1/dprgtf3kb/image/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');

  formData.append('api_key', '278286526421888');
  formData.append('resource_type', 'image');
  formData.append('file', file);
  console.log(file);
  try {
    const resp = await fetch(urlCloudinary, {
      method: 'POST',
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();

      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (err) {
    throw err;
  }
};
