import React from 'react'
import './index.css'
import img from '../../images/Saaim.jpg'
import { RiLiveFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { MdEmojiEmotions } from "react-icons/md";

export default function Body() {
    return (
        <>
            <div className="stories">

            </div>
            <div className="createPost">
                <div>
                    <span> <img src={img} width='100px' alt="" /></span>
                    <span><input type="text" /></span>
                </div>
                <div>
                    <div>
                        <span><RiLiveFill /></span>
                        <span>Live Video</span>
                    </div>
                    <div>
                        <span><GrGallery /></span>
                        <span>Photo/Video</span>
                    </div>
                    <div>
                        <span><MdEmojiEmotions /></span>
                        <span>Feeling/Activity</span>
                    </div>
                </div>
            </div>
            <div className="post">

            </div>
        </>
    )
}
