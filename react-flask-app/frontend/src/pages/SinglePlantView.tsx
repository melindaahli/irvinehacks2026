import { useState } from 'react';
import ProgressCard from "../components/ProgressCard.tsx"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function SinglePlantView() {
    const navigate = useNavigate();

    const plantName: string = "plant name";
    const speciesName: string = "species name";

    // 1: Details
    // 2: Recommended Tasks
    // 3: Gallery
    let [segmentViewId, setSegmentViewId] = useState<number>(1);

    function renderSegmentView() {
        if (segmentViewId === 1) {
            return (
                <>
                    <ProgressCard />
                    <ProgressCard />
                    <ProgressCard />
                </>
            );
        } else if (segmentViewId === 2) {
            return <>recommended tasks</>;
        } else {
            return <>gallery</>;
        }
    }

    return (
    <div className="flex flex-col justify-between h-screen">
        <Button onClick={() => { navigate("/dashboard")}}>back</Button>
        <div>plant shelf component</div>

        <div className="flex flex-row justify-between align-middle">
            <div className="flex flex-col justify-start align-middle">
                <h1>{plantName}</h1>
                <p>{speciesName}</p>
            </div>
            <div className="flex flex-col justify-center">
                <img alt="progress heart" />
            </div>
        </div>
        
        <div className="flex flex-row justify-around">
            <Button onClick={() => { setSegmentViewId(1) }}>Details</Button>
            <Button onClick={() => { setSegmentViewId(2) }}>Recommended Tasks</Button>
            <Button onClick={() => { setSegmentViewId(3) }}>Gallery</Button>
        </div>
        {renderSegmentView()}

    </div>
    );
}

export default SinglePlantView;