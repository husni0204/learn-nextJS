
import { getLatestPosts } from "@/lib/api";
import PostsList from "@/components/PostsList";

export default async function Home() {
    const posts = await getLatestPosts();
  return (
      <div>
          <div className="main-heading">
              <h1>Selamat datang di portal NextJS News</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem debitis doloribus explicabo id iusto magnam maxime nam repudiandae!</p>
          </div>
            <PostsList posts={posts}/>
      </div>

  );
}
