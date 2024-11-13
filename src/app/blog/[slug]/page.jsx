import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const getData = async (slug)=> {
  const res = await fetch(`${process.env.API_URL}api/blog/${slug}`);
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  // const post = await getPost(slug);
  const post = await getData(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;

  // const post = await getPost(slug);
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            post.img
              ? post.img
              : "https://images.unsplash.com/photo-1730524011496-282f89a61dd8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
