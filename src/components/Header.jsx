import { AddProcedureBoxContext } from "../context/ProceduresContext"
import { useContext } from "react"



function Header (props) {

	const  procName = useContext(AddProcedureBoxContext)

	const copyProc = () => {
		navigator.clipboard.writeText(procName)
	}

	


	return (
		<header>
			<div className=" w-screen bg-slate-400 h-20 flex  justify-between shadow-xl border-b-[1px] border-black">
				<h1 className=" ml-20 my-auto text-4xl">ProcedureApp</h1>
				<div className="space-x-20 text-2xl flex justify-center items-center mr-20  ">
					<button className="border-2 px-7 py-2 rounded-xl hover:bg-slate-500 transition-colors" onClick={copyProc}>Kopiuj</button>
					<button className="border-2 px-7 py-2 rounded-xl hover:bg-slate-500 transition-colors" onClick={props.resetButtonHandler}>Resetuj</button>
					<button className="border-2 px-7 py-2 rounded-xl hover:bg-slate-500 transition-colors">Generuj Specyfikacje</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
