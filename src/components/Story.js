import React from 'react'


export default function Header(props) {

    let image = "assets/img/"+props.user+".svg"
    return (
        <div class="story">
            <div class="imagem">
                <img src={image} />
            </div>
            <div class="usuario">
                {props.user}
    </div>
        </div>)


}

