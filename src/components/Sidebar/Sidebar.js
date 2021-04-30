import React from 'react'
import Footer from './Footer'
import Sugestion from './Suggestion'


export default function Sidebar(props) {
    const suggestions = ["bad.vibes.memes","chibirdart","razoesparaacreditar","adorable_animals","smallcutecats"]
    return (
        <>
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>

            <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {suggestions.map(user=>(
                    <Sugestion user={user}/>
                    ))}
            </div>
            <Footer/>
        </div>
        </>
    )


}

