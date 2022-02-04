import Card from './Card';


const Main = ({RobotList}) => {
    return (
        <div>
            {
            RobotList.map((user, i) => {
                return (
                    <Card key={i} id={RobotList[i].id} name={RobotList[i].name} email={RobotList[i].email} />
                )
            })
            }
        </div>
    )
}

export default Main;