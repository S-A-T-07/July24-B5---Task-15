const SlideContent = ({ slide }) => {
  return (
    <div className="content">
      <div className="author">{slide.author}</div>
      <div className="title">{slide.title}</div>
      <div className="topic">{slide.year}</div>
      <div className="des">{slide.description}</div>
      <div className="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default SlideContent;