import React from 'react';
import Card from './Card';


const Cardlist = ({ robots }) => {
    const cardArray = robots.map ((user,i) => {
        return (
            <Card key={robots[i].id} name={robots[i].name} id={robots[i].id} email={robots[i].email}/>
        )}
    );
    return (

        <div>   
            {cardArray}
        </div>

    );
}

export default Cardlist;