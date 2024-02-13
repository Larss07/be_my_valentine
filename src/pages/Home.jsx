import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {

    const navigate = useNavigate();

    const handleYesButtonClick = () => {
        navigate('/yes')
    };

    useEffect(() => {
        const moveButton = document.querySelector('button.button--no');

        const moveHover = () => {
            const i = Math.floor(Math.random() * 200) + 1;
            const j = Math.floor(Math.random() * -200) + 1;

            moveButton.style.position = 'relative';
            moveButton.style.left = i + "px";
            moveButton.style.top = j + "px";
        };

        moveButton.addEventListener("mouseover", moveHover);

        return () => {
            moveButton.removeEventListener("mouseover", moveHover);
        };
    }, []);


    return (
        <>
            <div className="container">
                <div className="photos">
                    <img className="img-babe" src="images\1.jpg" alt="HELLOOOOO" />
                    <img className="img-babe" src="images\2.jpg" alt="HELLOOOOO" />               
                </div>
                <div className="content">
                    <h1>WILL YOU BE MY VALENTINE? 🥰</h1>
                    <img className="img-gif" src="images\mochi-cat-what.gif" alt="" />
                    <div className="buttons-container">
                        <button onClick={handleYesButtonClick}>YES</button>
                        <button className='button--no'>NO</button>
                    </div>
                </div>
                <div className="photos">
                    <img className="img-babe" src="images\3.jpg" alt="HELLOOOOO" />
                    <img className="img-babe" src="images\4.jpg" alt="HELLOOOOO" />
                </div>
            </div>
        </>
    )
}