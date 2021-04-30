import ReactDOM from 'react-dom';
import Header from './components/Header'
import Story from './components/Story'
import Post from './components/Post'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

    const data = {
        posts: [
            {
                user: "meowed",
                photo: "./assets/img/gato-telefone.svg"
            },
            {
                user: "barked",
                photo: "./assets/img/dog.svg"
            }
        ],
        stories: ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]
    }
    return (
        <>
            <Header />
            <div class="corpo">
                <div class="esquerda">
                    <div class="stories">
                        {data.stories.map(user => (
                            <Story user={user} />
                        ))}
                    </div>
                    <div class="posts">
                        {data.posts.map(post => (
                            <Post
                                user={post.user}
                                photo={post.photo}
                            />
                        ))}
                    </div>

                </div>
                <Sidebar />
            </div>
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>



        </>
    )


}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));