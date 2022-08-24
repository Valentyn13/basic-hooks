
const ShowUserInfo = ({userList:{firstName, lastName, age}}) => {


    return (
        <div>
            <p>
                Name: {firstName}
            </p>
            <p>
                Last name: {lastName}
            </p>
            <p>
                Age: {age}
            </p>
        </div>
    )
}

export default ShowUserInfo;