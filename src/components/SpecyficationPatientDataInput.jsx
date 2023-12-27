

export default function SpecyficationPatientDataInput(props) {
  return  <div className=" text-2xl my-4">
        <label htmlFor="name" className=" text-2xl ">{props.title} </label>
							<input
							className=" border-2 w-full p-2 mt-4"
								type="text"
								id="name"
								name="name"
								placeholder={props.title}
								onChange={(e) => props.updateDataHandler(e.target.value)}
							/>
                           

    </div>
}