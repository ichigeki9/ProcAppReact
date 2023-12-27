import { useState } from "react";
import Button from "./Button";
export default function SpecyficationDataInput(props) {
	// const [transportData,setTransportData] = useState(false)

	function qwe (e) {
		console.log(e.target);
		
		
		props.setSpecData()

	}
	

	return (
		<>
		
			<div className=" flex flex-col ">
				<div className=" text-2xl my-4 flex flex-col">
					<label htmlFor="time" className=" text-2xl mb-4">
						Czas pobytu pacjenta:{" "}
					</label>
					<select
						id="time"
						className="p-3 rounded-lg bg-slate-300 cursor-pointer"
						onChange={(e) => {
							props.setSpecData((prevValue) => {
								return {...prevValue, priceTime:e.target.value}
							})
						}}
						>
						<option>Wybierz</option>
						<option value="200">Do godziny</option>
						<option value="400">1-3 h</option>
						<option value="600">3-6 h</option>
						<option value="800">Powyżej 6 h</option>
					</select>
				</div>

				<div className="text-2xl my-4 flex flex-col">
					<label className="mb-5" htmlFor="porada">
						Porada:
					</label>
					<select
						id="porada"
						className="p-3 rounded-lg bg-slate-300 cursor-pointer">
						<option value="150">Ambulatoryjna</option>
						<option value="180">Zabiegowa</option>
						<option value="330">Porada Ambulatoryjna i Zabiegowa</option>
					</select>
				</div>

				<div className="text-2xl my-4 flex flex-col">
					<label className="mb-5" htmlFor="konsSpec">
						Konsultacja Specjalistyczna:
					</label>
					<select
						id="konsSpec"
						className="p-3 rounded-lg bg-slate-300 cursor-pointer">
						<option selected>
							Brak
						</option>
						<option value="200">Internistyczna</option>
						<option value="200">Ortopedyczna</option>
						<option value="200">Chirurgiczna</option>
						<option value="200">Neurochirurgiczna</option>
					</select>
				</div>

				<div className="mt-5 flex flex-col items-start text-2xl">
					<div className="mb-3 ">
						<input
							onChange={() => props.setTransportData(!props.transportData)}
							type="checkbox"
							id="transport"
							className="w-5 h-5"
							name="transport"
							checked={props.transportData}
						/>
						<label htmlFor="transport" className=" ml-5">
							Transport
						</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="dataCheck"
							name="dataCheck"
							className=" w-5 h-5"
						/>
						<label htmlFor="dataCheck" className=" ml-5">
							Dodaj dzisiejszą date
						</label>
					</div>
				</div>

				{props.transportData && (
					<div className="mt-6">
						<div className=" my-4 flex flex-col">
							<label className="text-2xl mb-3" htmlFor="typeTransport">
								Rodzaj Transportu:
							</label>
							<select
								className="p-3 rounded-lg bg-slate-300 cursor-pointer"
								id="typeTransport">
								<option value="" selected>
									Brak
								</option>
								<option value="120">
									Kierowca + Ratownik w godz. 7:00 - 22:00
								</option>
								<option value="150">
									Kierowca + Ratownik w godz. 22:00 - 7:00
								</option>
								<option value="150">
									Kierowca + Ratownik w dni ustawowo wolne
								</option>
							</select>
						</div>

						<div className="mb-4">
							<input
								type="checkbox"
								id="transpDoctorCheck"
								name="transpDoctorCheck"
							/>
							<label htmlFor="transpDoctorCheck">Transport z lekarzem</label>
						</div>

						<div className="border-2 flex flex-col text-lg">
							<div className="my-4 ">
								<label className="mr-5" htmlFor="transpTime">Czas transportu:</label>
								<input
                className="border border-black bg-slate-300"
									type="number"
									id="transpTime"
									placeholder="Czas w godzinach"
								/>
							</div>
							<div className="mb-4 ">
								<label className="mr-5" htmlFor="transpDist">Dystans transportu:</label>
								<input
                className="border border-black bg-slate-300"
									type="number"
									id="transpDist"
									placeholder="Dystans w km"
								/>
							</div>
						</div>
					</div>
				)}

				<div className=" my-10 w-full flex justify-between ">
					<Button title={"Wyczyść"} />
					<Button title={"Generuj"} />
				</div>
			</div>
			
		</>
	);
}
