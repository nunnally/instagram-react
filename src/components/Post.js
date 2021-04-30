import React from 'react'


export default function Post(props) {
    const image = `assets/img/${props.user}.svg`
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={image} />
                    {props.user}
          </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.photo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/adorable_animals.svg`} />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )


}

