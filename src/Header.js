import logo from "./mode.png"
export default function Header() {
    return (
        <div className="flex px-32 py-4 justify-between items-center">
            <div id="logo">
                <h1 id="h1" className="font-mono font-bold text-5xl text-lime-700">BiRo</h1>
            </div>
            <div id="mode">
                <h2>
                    <img src={logo} className="w-16" alt="notFound"/>
                </h2>
            </div>
        </div>
    );
}
