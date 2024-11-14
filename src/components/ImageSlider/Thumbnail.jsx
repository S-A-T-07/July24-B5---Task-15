const Thumbnail = ({ slide }) => {
  return (
    <div className="item">
      <img src={slide.image} alt={slide.title} />
      <div className="content">
        <div className="title">MARVEL</div>
      </div>
    </div>
  );
};

export default Thumbnail;