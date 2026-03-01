import RightArrow from '../assets/arrow_right.svg';
import { useNavigate } from 'react-router-dom';
import { usePlants } from "../context/PlantContext";


function DashboardView() {
    const navigate = useNavigate();
    const { allTasks } = usePlants();

    return (
    <div className="blue_background">
        <div className="h-[324px]">
            <p className="text-[25px] text-left pt-[25px] -pl-[30px]">welcome back, shart</p>
        </div>
        <div className="tan-card-dashboard">
            <header className="flex items-center justify-between w-full h-[45px]">
                <h2 className="dashboard-title">My Garden</h2>
                <div onClick={() => { navigate("/gallery")}}>
                    <img src={RightArrow} className="w-[45px]"/>
                </div>
            </header>
            <section> {/* may turn into its own react component */}
                <div className="plant-card" ></div>
            </section>
            <p className="dashboard-title self-start mt-2">Recommended Tasks</p>
            <div className="scroll-container">
                <section className="flex flex-col justify-start align-center gap-2"> {/* may turn into its own react component */}
                    {allTasks.map(task => (
                    <div key={task.id} className="pt-[20px] w-[300px] h-[60px] bg-linear-to-t from-[#92cb4f4d] to-[#d4e6974d] rounded-[15px]">
                        {task.title} ({task.plantId})
                    </div>
                    ))}
                </section>
            </div>
            
        </div>
    </div>
    );
}

export default DashboardView;