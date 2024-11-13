import PostCard from "@/components/postCard/PostCard";
import styles from "./blogPage.module.css";
import { getPosts } from "@/lib/data";

const getData = async ()=> {
  const res = await fetch(`${process.env.API_URL}api/blog`,{
    next: {
      revalidate: 60
  }})
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}

    
    </div>
  )
}

export default BlogPage