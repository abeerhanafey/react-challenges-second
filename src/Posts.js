import Post from "./Post";
import Background from "./Backgroung";
import img1 from "./images/one.jpg";
import img2 from "./images/two.jpg";
import img3 from "./images/three.jpg";
import img4 from "./images/four.jpg";
import img5 from "./images/five.jpg";
import img6 from "./images/six.jpg";

export default function Posts() {
    let Count = 1;
    return (
        <div className="w-full bg-white px-28 py-8 flex justify-between items-center gap-28">
            <div className="w-2/4">
                <Post/>
            </div>
            <div className="w-1/3 grid grid-cols-3 gap-2">
                <Background imgSrc={img1} count = {Count++} />
                <Background imgSrc={img2} count = {Count++} />
                <Background imgSrc={img3} count = {Count++} />
                <Background imgSrc={img4} count = {Count++} />
                <Background imgSrc={img5} count = {Count++} />
                <Background imgSrc={img6} count = {Count++} />
                
            </div>
        </div>
    );
}

document.querySelector(".post img").src = img2;
document.querySelectorAll(".background img").forEach((el) => {
    el.onclick = function() {
        document.querySelector(".post img").src = el.src;
    }
});