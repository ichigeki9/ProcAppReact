import { AddProcedureBoxContext } from "../context/ProceduresContext"
import { useContext } from "react"



function TextBoxProc() {
   const  procName = useContext(AddProcedureBoxContext)


    // console.log(procName);

    return (
        <>
        <div className="bg-slate-300 w-screen">
        <p className="ml-5 text-start text-xl">{procName}</p>
        </div>
        </>
    )
    
}

export default TextBoxProc