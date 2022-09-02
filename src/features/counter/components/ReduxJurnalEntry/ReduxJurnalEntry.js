import React from "react";

const Entrys = ({entrys}) =>{
    let entry

    entrys.length ===0 ?
        entry = <h5>No entrys</h5>:
        entry = entrys.map(e =>{
            return(
                <div>
                    entry
                </div>
            )
        })
    
    return(
        <div>
            {entry}
        </div>
    )
}

export default Entrys