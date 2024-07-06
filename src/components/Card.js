import React from "react";
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // Pahale se liked hua pada hai
            setLikedCourses( (prev) => prev.filter( (cid) => cid !== course.id));
            toast.warning("Like removed")
        }
        else{
            // pahale se liked nhi hai
            // insert krna hai liked courses me
            if(likedCourses === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses( (prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully")
        }
    }

    return (
        <div className="w-[310px] rounded-lg bg-bgDark bg-opacity-80 overflow-hidden ">
            <div className="relative "> 
                <img src={course.image.url} alt={course.image.alt} />

                <div className="w-[40px] h-[40px] bg-white grid place-items-center rounded-full absolute right-2 top-36 " >
                    <button onClick={clickHandler} >
                        {
                            (likedCourses.includes(course.id) ) ? (<FcLike fontSize = '1.75rem' />) : (<FcLikePlaceholder fontSize = '1.75rem' />)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white text-sm">
                    {
                        `${course.description.substring(0 , 200)}.....`
                    }
                </p>
            </div>

            
        </div>
    )
}

export default Card;


