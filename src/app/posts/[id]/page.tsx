import {getDetailPost} from "@/lib/api";

interface PageProps {
    params: {
        id: number
    }
}

const PageDetail = async ({params}: PageProps) => {
    const {id} = await params;
    const post = await getDetailPost(id)
    console.log(post)
    return (
        <div className={"post-detail"}>
            <h3>{post.title}</h3>
            <div className={"content"}>{post.body}</div>
        </div>
    )
}

export default PageDetail