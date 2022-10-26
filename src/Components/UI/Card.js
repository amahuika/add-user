function Card(props) {
  return (
    <div className="card mt-3 shadow-sm">
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
