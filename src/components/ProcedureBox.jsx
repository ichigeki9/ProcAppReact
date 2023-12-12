import { useState } from "react";

function ProcedureBox(props) {
	
	const {title:nameProcGroup, lists:procedureList} = props.procGroup
	
	
	const ProcItem = procedureList.map((proc) => (
		<li className="my-4" key={proc.idProc}>
			<label className="mr-10 text-3xl" htmlFor={proc.name}>
				{proc.name}
			</label>
			<input
				onChange={props.addProcFct}
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
			<legend className="text-2xl">{nameProcGroup}</legend>
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
{
	/* <>
			<div className="w-screen mt-10 border-4 border-red-400 grid grid-cols-3 gap-6 place-items-center   ">

				<div className=" container-one flex space-y-3 ">




					<fieldset className="border-2 border-black space-y-3">
						<legend className="text-2xl">Badania laboratoryjne :</legend>

						<ProcedureItem />


					</fieldset>
				</div>

				
					<fieldset className="border-2 border-black space-y-3">
						<legend className="text-2xl">Badania laboratoryjne :</legend>

						<div >
							<label className="mr-3 text-3xl" for="aptt">APTT</label>
							<input
								type="checkbox"
								id="aptt"
								name="aptt"
								proc="G11,"
								priceLab="16"
							/>
						</div>


					</fieldset>
				</div>

				<div className=" container-one flex space-y-3">
					<fieldset className="border-2 border-black space-y-3">
						<legend className="text-2xl">Badania laboratoryjne :</legend>

						<div >
							<label className="mr-3 text-3xl" for="aptt">APTT</label>
							<input
								type="checkbox"
								id="aptt"
								name="aptt"
								proc="G11,"
								priceLab="16"
							/>
						</div>


					</fieldset>
				</div>
				<div className=" container-one flex space-y-3">
					<fieldset className="border-2 border-black space-y-3">
						<legend className="text-2xl">Badania laboratoryjne :</legend>

						<div >
							<label className="mr-3 text-3xl" for="aptt">APTT</label>
							<input
								type="checkbox"
								id="aptt"
								name="aptt"
								proc="G11,"
								priceLab="16"
							/>
						</div>


					</fieldset>
				</div>


			</div>
		</> */
}
