
const user = {
    name: "Alessandro",
    id: 1
  };

  const defaultImage = "Rob";
function getNameOrDefault(name) {
        return name == "Alessandro" ? name : defaultImage;
}

const Demo = (props) => {
    return (
        <div>
            <p>Benvenuto {getNameOrDefault(props.name)}! Id {user.id}</p>
        </div>
    );
}


export default Demo;