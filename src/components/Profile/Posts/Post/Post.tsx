import React from "react";
import s from "./Post.module.css"
import {PostType} from "../Posts";

type PostPropsType = PostType;

export const Post = (props: PostPropsType) => {
    const {message, likeCounter} = props;
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="img"/>
            {message}
            <div>
                Like {likeCounter}
            </div>
        </div>
    );
};