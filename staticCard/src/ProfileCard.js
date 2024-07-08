function ProfileCard({ title, handle, image,desc }) {
    // const {title, handle} = props
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pad logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{desc}</div>
            </div>
        </div>
    )
}
export default ProfileCard;