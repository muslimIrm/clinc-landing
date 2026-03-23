


const LoadingSpinner = ({state}: {state: boolean})=>{
    console.log(state)
    return (
        state && 
        <div className="z-[99999] top-0 left-0 w-screen bg-gray-900/30 h-screen fixed flex items-center justify-center">
            <div className="w-22 h-22 bg-background rounded-2xl flex items-center justify-center">
                <span className="loader"></span>
            </div>
        </div>
    )

}


export default LoadingSpinner

