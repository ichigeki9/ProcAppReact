import { useState } from "react";

function ProcedureBox(props) {
	const procList = props.procGroup[0];
	const procboxName = props.procGroup[1];


	const ProcItem = procList.map((proc, index) => (
		<li className="my-4" key={proc.idProc}>
			<label className="mr-10 text-3xl" htmlFor={proc.name}>
				{proc.name}
			</label>
			<input
				onChange={() => props.addProcFct(proc.isCheck,index,proc.idProc)}
				// onClick={console.log('click')}
				className="w-6 h-6"
				type="checkbox"
				id={proc.idProc}
				pricelab={proc.price}
				name={proc.name}
				checked={proc.isCheck}
			/>
		</li>
	));

	return (
		<fieldset className="border-2 border-black space-y-3">
			<legend className="text-2xl">{procboxName}</legend>
			<ul>{ProcItem}</ul>
		</fieldset>
	);

	// const procedurContainerLabo = laboProcList.map((procedure) => (
	// 	<>
	// 	<legend className="text-2xl">{laboratory.title}</legend>
	// 	<ul>
	// 	<li className="my-4">
	// 		<label className="mr-10 text-3xl" for={procedure.name}>
	// 			{procedure.name}
	// 		</label>
	// 		<input
	// 			className="w-6 h-6"
	// 			type="checkbox"
	// 			id={procedure.name}
	// 			proc={procedure.idProc}
	// 			priceLab={procedure.price}
	// 		/>
	// 	</li>
	// 	</ul>
	// 	</>
	// ))
}

export default ProcedureBox;
