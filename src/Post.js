import "./style/post.css"


function Post(){
    return(
        <div id="page_post">
            <div id="posts">
                <h1>posts</h1>
            </div>
            <div id="new_post">
                <h2 className="titre_new_post">Titre</h2>
                <input type="text" id="input_new_post_titre"/>
                <h2 className="titre_new_post">Post</h2>
                <input type="text" id="input_new_post_post"/><br></br>
                <button className="button_home">Post</button>

            </div>

        </div>
    )
}
export default Post