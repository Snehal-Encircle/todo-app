import React from 'react'

const DeskIteam = ({ des, onDelete }) => {
    return (
        <>
            <div>
                <h4>{des.title}</h4>
                <p>{des.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={() => { onDelete(des) }}
                >Delete</button>
            </div>
            <hr />
        </>
    )
}

export default DeskIteam