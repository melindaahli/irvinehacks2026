import RightArrow from '../assets/arrow_right.svg';

function DashboardView() {
    return (
    <div className="container blue_background">
        <div className="h-[324px]">
            <p className="text-[25px] text-left pt-[25px] -pl-[30px]">welcome back, shart</p>
        </div>
        <div className="card tan-card w-[440px] h-[632px]">
            <header className="card-body flex items-center justify-between w-full">
                <h2 className="dashboard-title">My Garden</h2>
                <div className="card-actions">
                    <img src={RightArrow} className=""/>
                </div>
            </header>
            <section> {/* may turn into its own react component */}
                <div className="plant-card"></div>
            </section>
            <p className="dashboard-title">Recommended Tasks</p>
            <section className="flex items-center w-full">
                <div className="recc-task-button">
                    <p>task</p>
                    
                </div>
            </section>
        </div>
    </div>
    );
}

export default DashboardView;