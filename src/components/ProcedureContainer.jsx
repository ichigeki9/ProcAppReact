import { Children } from "react";



function ProcedureContainer(props) {


	return (
		<div className="w-screen mt-10  grid grid-cols-3 gap-6 place-items-center ">
            {props.children}
        </div>
	);
}

export default ProcedureContainer;
