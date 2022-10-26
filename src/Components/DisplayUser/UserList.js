function UserList(props) {
  return (
    <div className="row">
      <div className="col-4">
        <p>{props.name}</p>
      </div>
      <div className="col-6">
        <p>{props.age} Years old</p>
      </div>
    </div>
  );
}

export default UserList;
