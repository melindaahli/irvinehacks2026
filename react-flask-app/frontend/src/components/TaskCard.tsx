import {useNavigate} from 'react-router-dom';

function TaskCard (props: any) {
    const navigate = useNavigate();
    const showName = props.showName?? true;
    const path = `/plant/${props.task.plantId}`;

    return (
         <div key={props.task.id} 
              className="pl-[15px] pt-[5px] w-[300px] h-[60px] bg-linear-to-t from-[#92cb4f4d] to-[#d4e6974d] rounded-[15px]"
              onClick={() => navigate(path)}
              >
            <p className="mb-0 text-start font-bold">
                {showName && `${props.plant?.name ?? "Unknown Plant"} - `}{props.task.title}
            </p>
            <p className="mb-0 text-start">{props.task.message}</p>
        </div>
    );
}

export default TaskCard;