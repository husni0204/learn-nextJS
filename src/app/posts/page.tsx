import {getAllPosts} from "@/lib/api";
import PostsList from "@/components/PostsList";

const PagePost = async () => {
    const posts = await getAllPosts();
    return (
        <div>
            <div className="main-heading">
                <h3>Daftar Tulisan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem debitis doloribus explicabo id iusto magnam maxime nam repudiandae!</p>
            </div>
            <PostsList posts={posts}/>
        </div>
    )
}

export default PagePost