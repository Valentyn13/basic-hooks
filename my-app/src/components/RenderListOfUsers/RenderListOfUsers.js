import ShowUserInfo from "../ShowUserInfo/ShowUserInfo";

const RenderListOfUsers = ({userList}) => {
    console.log(userList)
    return(
        <>
            {
            userList.map((user) => {
                console.log(user)
                return(
                    <>
                    <ShowUserInfo key={user.id} user={user}/>
                    </>
                )
            
        }
    )}
        </>
    )

}

export default RenderListOfUsers;
