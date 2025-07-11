import React from 'react';
import { Link } from 'react-router-dom';

function Students(props) {
    let Students = [
        {id:1,name:"Aarush"},
        {id:2,name:"Kabir"},
        {id:3,name:"Adhira"}
    ]
    return (
        <div>
            {
                Students.map(()=>{
                    return(
                        <>
                            <Link to={`/stud_Details/${s.id}`} key={s.id}>{s.name}</Link> <br/>
                        </>
                    )
                })
            }
            
        </div>
    );
}

export default Students;