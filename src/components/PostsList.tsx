import Link from "next/link";
import { Post } from "@/types/Post";

interface PostsListProps {
    posts: Post[]
}

const PostsList = ({posts}: PostsListProps) => {

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div className={"post-item"} key={post.id}>
                    <h4><Link href={`posts/${post.id}`}>{post.title}</Link></h4>
                </div>
            ))}
        </div>
    )
}

export default PostsList;