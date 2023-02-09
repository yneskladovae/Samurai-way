import React from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";

export type PostType = {
    message:string
    likeCounter: number
}

export const Posts = () => {
    return (
        <div className={s.content}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Post 1"} likeCounter={1} />
                <Post message={"Post 2"} likeCounter={2} />
                <Post message={"Post 3"} likeCounter={3} />
                <Post message={"Post 4"} likeCounter={4} />
                <Post message={"Post 5"} likeCounter={5} />
            </div>
        </div>
    );
};