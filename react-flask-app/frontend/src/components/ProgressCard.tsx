import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressCard() {
    const category: string = "Temperature"
    const plantHealthString: string = "Good";
    const currentVal: number = 50;
    const maxVal: number = 80;
    
    return (
    <div className="rounded-2xl grid grid-cols-5 gap-4 bg-green-200 ">
        <div className="col-start-1 col-end-2 flex flex-row justify-center py-3 px-2">
            <img src="" alt="thermomoeter icon"/>
        </div>
        

        {/* main content*/}
        <div className="col-start-2 col-end-6 py-2 pr-3"> 
            <div className="flex flex-row justify-between">
                <p className="text-base">{category}</p>
                <p className="text-base">{plantHealthString}</p>
            </div>
            <div>
                <ProgressBar now={currentVal}  min={0} max={maxVal} label={`${currentVal/maxVal * 100}%`} />
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-sm">Current</p>
                <p className="text-sm">Recommended</p>
            </div>
        </div>
    </div>
    );
}

export default ProgressCard; 