import ShinyText from "../../components/ShinyText/ShinyText";

const MethodicalProcess = () => {
    return (
        <div className="relative min-h-screen w-full  py-30">
            <div className="text-white text-center">

            <h1 className=" py-3 text-md w-full flex items-center justify-center">How I work</h1>
            <ShinyText className="text-4xl" gradientStop="60%"> A Methodical Process</ShinyText>
            <br />
            <ShinyText className="text-4xl" gradientStop="60%"> for best Result</ShinyText>
            </div>

            <div className="w-full py-10 flex relative">
                <div className="absolute left-50 top-30 bg-transparent rounded-full h-60 w-60 border-1 border-zinc-300 uppercase text-zinc-100 font-semibold flex items-center justify-center"> 
                    <h1>discovery</h1>
                </div>
                <div className="absolute left-100 top-30 rounded-full h-60 w-60 bg-transparent border-1 border-zinc-300 uppercase text-zinc-100 font-semibold flex items-center justify-center"> 
                    <h1>Research</h1>
                </div>
                <div className="absolute left-148 top-23 rounded-full h-75 w-75 bg-white z-10 border-1 border-zinc-300 uppercase text-zinc-100 font-semibold flex items-center justify-center p-4"> 
                    <div className=" h-full w-full flex items-center justify-center rounded-full border-2 border-zinc-900">

                    <h1 className="text-zinc-900">design</h1>
                    </div>
                </div>
                <div className="absolute left-212 top-30 rounded-full h-60 w-60 bg-transparent border-1 border-zinc-300 uppercase text-zinc-100 font-semibold flex items-center justify-center"> 
                    <h1>iteration</h1>
                </div>
                <div className="absolute left-262 top-30 rounded-full h-60 w-60 bg-transparent border-1 border-zinc-300 uppercase text-zinc-100 font-semibold flex items-center justify-center"> 
                    <h1>result</h1>
                </div>
            </div>
        </div>
    );
};
export default MethodicalProcess;