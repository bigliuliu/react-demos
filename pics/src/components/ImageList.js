import ImageShow from "./ImageShow";
import './ImageList.css'
function ImageList({ images }) {
  const renderImages = images.map((image,index) => {
    return <ImageShow image={image} key={index}/>;
  });
  return <div className="image-list">{renderImages}</div>;
}
export default ImageList;
