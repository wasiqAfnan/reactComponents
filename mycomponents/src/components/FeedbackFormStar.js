import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"
export default function FeedbackFormStar() {
    const [rating, setRating] = useState(null);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [showInput, setShowInput] = useState(false);

    const star = Array(5).fill(0);
    return (
        <>

            <h1>FeedbackForm</h1>
            <div style={styles.container}>
                {star.map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <div>
                            <FaStar
                                size={40}
                                style={styles.star}
                                color={(rating || hoverValue) > i ? "orange" : "grey"}
                                onMouseOver={() => { setHoverValue(ratingValue); }}
                                onMouseLeave={() => { setHoverValue(undefined) }}
                                onClick={() => { setRating(ratingValue);setShowInput(true) }} />
                        </div>
                    )
                })}
            </div>
            
                {showInput && <div style={styles.container2}>
                    <textarea style={styles.textarea} placeholder="Write your thoughts " />
                    <input style={styles.button} type="submit" value="submit" />
                </div>}
            
        </>
    )
}

const styles = {
    container: {
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70vw",
        margin: "auto",
        // border: "2px solid blue",
    },
    container2: {
        marginTop: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70vw",
        margin: "auto",
        // border: "2px solid blue",
    },
    star: {

        cursor: "pointer"
    },
    textarea: {
        width: "40vw",
        padding: ".5rem",
        fontFamily: "ubuntu",
        fontSize: "1.2rem",
        borderRadius: "5px",
    },
    button: {
        margin: "1rem 0 1rem 0",
        width: "30vw",
        paddin: "5px",
        fontSize: "1.0rem",
        textTransform: "uppercase"
    }
}
