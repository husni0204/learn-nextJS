import {Post} from "@/types/Post";

export async function getLatestPosts  () : Promise<Post[]>  {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    return await res.json()
}

export async function getDetailPost  (id:number) : Promise<Post>  {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json()
}

export async function getAllPosts  () : Promise<Post[]>  {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await res.json()
}