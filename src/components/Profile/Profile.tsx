import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.bgProfileImg}
                    src="https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/unique-lake-snow-mountain-clouds-nature-landscape-web-header.jpg"
                    alt="img"/>
            </div>
            <div>
                <img src="https://cdn.fastcup.net/avatars/users/616287_7hlblp731.jpg" alt=""/>
            </div>
            <div>
                info
            </div>
            <Posts />
        </div>
    );
};