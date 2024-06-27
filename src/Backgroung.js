export default function Background(props) {
    return (
        <div className="background p-2 bg-lime-100 rounded-md shadow-md shadow-lime-100 text-center">
            <h3 className="bh font-mono font-bold text-xl mb-8 text-lime-700">Img {props.count}</h3>
            <img className="w-full h-24 rounded-md" src={props.imgSrc} alt="notFound"/>
        </div>
    );
}