import Card from "../UI/Card";
import UserList from "./UserList";

function DisplayUsers(props) {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-sm-8 col-md-6">
        {props.allUsers.map((value) => (
          <Card>
            <UserList key={value.id} name={value.name} age={value.age} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DisplayUsers;
