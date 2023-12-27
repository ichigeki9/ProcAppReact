import Button from "./Button";
import SpecyficationPatientDataInput from "./SpecyficationPatientDataInput";
import SpecyficationDataInput from "./SpecyficationDataIntput";
import { useState } from "react";

function Modal(props) {
	const [secoundModal, setSecoundModal] = useState(false);
	const [transportData, setTransportData] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		pesel: "",
		adress: "",
		telNum: "",
	});

	const [specData, setSpecData] = useState({
		time: "",
		priceTime: "",
		por: "",
		pricePor: "",
		konsSpec: "",
		priceKonsSpec: "",
	});

	console.log(specData);

	function setSecModal() {
		setSecoundModal(true);
	}

	function handleSubmit(e) {
		e.preventDefault();

		props.setPatientData(formData);

		props.closeModal(false);
		setSecoundModal(false);

		console.log("dupa");
	}

	console.log(formData);

	return (
		<div>
			<div className="backg w-full h-screen bg-slate-950 opacity-80 absolute top-0 left-0 flex "></div>

			<div className=" flex items-center justify-center absolute top-0 left-0 w-full h-full">
				<div className=" w-[500px]  {h-[700px]} border-2 border-white bg-white flex  items-center flex-col relative">
					<button
						onClick={props.closeModal}
						className="absolute top-5 right-10 border rounded border-black p-3 bg-slate-300 hover:bg-slate-400 text-xl">
						X
					</button>
					<h1 className=" mt-10 text-4xl text-">
						{!secoundModal ? "Dane Pacjenta" : "Dane do specyfikacji"}
					</h1>
					<form onSubmit={handleSubmit}>
						<div className=" w-[500px] px-14 flex flex-col justify-center items-center mt-10">
							{!secoundModal ? (
								<div>
									<SpecyficationPatientDataInput
										title={"Imie i Nazwisko:"}
										updateDataHandler={(value) => {
											setFormData((prevData) => {
												return { ...prevData, name: value };
											});
										}}
									/>
									<SpecyficationPatientDataInput
										title={"Pesel"}
										updateDataHandler={(value) => {
											setFormData((prevData) => {
												return { ...prevData, pesel: value };
											});
										}}
									/>
									<SpecyficationPatientDataInput
										title={"Adres"}
										updateDataHandler={(value) => {
											setFormData((prevData) => {
												return { ...prevData, adress: value };
											});
										}}
									/>
									<SpecyficationPatientDataInput
										title={"Telefon"}
										updateDataHandler={(value) => {
											setFormData((prevData) => {
												return { ...prevData, telNum: value };
											});
										}}
									/>

									<div className=" my-10 w-full flex justify-between ">
										<Button title={"Wyczyść"} />
										<Button title={"Dalej"} openNextModal={setSecModal} />
									</div>
								</div>
							) : (
								<SpecyficationDataInput
									transportData={transportData}
									setTransportData={setTransportData}
									setSpecData={setSpecData}
								/>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Modal;
