import React from 'react'
import Teste from './teste/teste'
import './card.css'



class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts : [
                {
                foto: 'https://avatars3.githubusercontent.com/u/6290749?s=400&v=4',
                usuario: '@camilaibs',
                nome: 'Camila Bello',
                post: '  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanec'
            },{
                foto: 'https://avatars3.githubusercontent.com/u/32687551?s=400&v=4',
                usuario: '@dani',
                nome: 'Dani Naomi',
                post: ' Daniiiiiiii é mt legal mas foi embora e nos abandonou --------------------------------------------------------'
            },
            {
                foto: 'https://avatars3.githubusercontent.com/u/32687551?s=400&v=4',
                usuario: '@dani',
                nome: 'Juuu',
                post: ' Daniiiiiiii é mt legal mas foi embora e nos abandonou --------------------------------------------------------'
            },
            {
                foto: 'https://avatars3.githubusercontent.com/u/32687551?s=400&v=4',
                usuario: '@dani',
                nome: 'Teeeeeste',
                post: ' Card é mt legal mas foi embora e nos abandonou --------------------------------------------------------'
            }
        ]
        }


    }


    render() {
   
       
        return (



            <div>

                {this.state.posts.map((postDoUsuario)=>{
                    return(
                        <Teste
                        post = {postDoUsuario.post}
                        nome = {postDoUsuario.nome}
                        />



                    // <article className="tweet" >
                    // <p>{postDoUsuario.post}> </p>
                    // <div> {postDoUsuario.nome} </div>
                    // </article>
                    )
                })}

                 {/* {this.state.posts.map((postDoUsuario)=>(
                    <article className="tweet" >
                    <p>{postDoUsuario.post}> </p>
                    <div> {postDoUsuario.nome} </div>
                    </article>
                    )
                )} */}

                {/* <article className="tweet" >
                    <div className="tweet__cabecalho ignoraModal">

                        <img className="tweet__fotoUsuario" src={this.state.post.foto} alt="" />
                        <span className="tweet__nomeUsuario">{this.state.post.nome}</span>
                        <a href=""><span className="tweet__userName">{this.state.post.usuario}</span></a>

                    </div>
                    <p className="tweet__conteudo">
                    {this.state.post.post}
                        <span>
                          
</span>
                    </p>
                </article>

                <article className="tweet" >
                    <div className="tweet__cabecalho ignoraModal">

                        <img className="tweet__fotoUsuario" src={this.posts.foto} alt="" />
                        <span className="tweet__nomeUsuario">Camila Bello</span>
                        <a href=""><span className="tweet__userName">@camilaibs</span></a>

                    </div>
                    <p className="tweet__conteudo">
                        <span>
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica em Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                            em Ipsum é simplesmente uma simulação de texto da indústria tipográfica
</span>
                    </p>
                </article> */}

            </div>

        )
    }
}

export default Card