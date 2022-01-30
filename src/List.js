import React from 'react';

const List = ({users}) => {

    console.log(users);

return (
    <>
    {
    users.map(user => {
        return(
            <article className="person">
            <img src={user.image} alt={user.name} />
            <div>
            <h4>{user.name}</h4>
            <p>{user.age} years</p>
            </div>
        </article>
        )
    })
    }
    </>
);
};

export default List;
