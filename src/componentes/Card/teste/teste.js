import React from 'react'

function Teste(props) {


    return(

    <article className="tweet" >
        <p>{props.post}> </p>
        <div> {props.nome} </div>
    </article>
    )

}

export default Teste