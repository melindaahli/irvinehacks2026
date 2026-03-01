import LeftButton from "../assets/arrow_left.svg"
import RightButton from "../assets/arrow_right.svg";

import Flower from '../assets/flower.svg';
import Leafy from '../assets/leafy.svg';
import Succulent from '../assets/succulent.svg';

import Shelf from "../assets/shelf.svg";
import type { PlantType } from '../data/plant-data';

type PlantShelfProps = {
  plantType: PlantType;
};


function PlantShelf(props: PlantShelfProps) {

    const plantTypeImages: Record<PlantType, string> = {
        flower: Flower,
        leafy: Leafy,
        succulent: Succulent
    };

    const plantImg = plantTypeImages[props.plantType];

    return (
    <div className="flex flex-row justify-between align-center my-3">
        <div className="flex w-25 align-center">
            <img src={LeftButton} className="scale-70" />
        </div>
        <div className="flex flex-col justify-center">
            <img className="z-10 -mb-7" src={plantImg} />
            <img className="z-0" src={Shelf} />
        </div>
        <div className="flex w-25 align-center">
            <img src={RightButton} className="scale-70" />
        </div>
    </div>
);
}

export default PlantShelf;