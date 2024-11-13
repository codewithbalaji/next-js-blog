import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = await params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = await params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
