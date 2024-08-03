function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.urls.alt_description}></img>
    </div>
  );
}
export default ImageShow;
