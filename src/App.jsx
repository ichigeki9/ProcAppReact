import Header from "./components/Header";
import "./App.css";
import ProcedureBox from "./components/ProcedureBox";
import ProcedureContainer from "./components/ProcedureContainer";
import TextBoxProc from "./components/TextBoxProc";
import { AddProcedureBoxContext } from "./context/ProceduresContext";
import { useContext, useState} from "react";
import Modal from "./components/Modal";

const procList = [
	{
		title: "Badania Labolatoryjne",
		lists: [
			{ name: "aptt", idProc: "G11", price: 16, isCheck: false },
			{ name: "alat", idProc: "I17", price: 11, isCheck: false },
			{ name: "aspat", idProc: "I19", price: 20, isCheck: false },
		],
	},
{
		title: "Podstawowe",
		lists: [
			{ name: "podstawa", idProc: "89.00,", price: null, isCheck: false },
			{ name: "szycie", idProc: "91.11,", price: 10, isCheck: false },
		],
	},
{
		title: "Diagnostyka obrazowe",
		lists: [
			{ name: "tk", idProc: "89.030,", price: 200, isCheck: false },
			{ name: "rtg kolana", idProc: "88.22,", price: 50, isCheck: false },
		],
	},
];

const [labProc, basicProc, obrProc] = procList

const [{title:titleLab}, {title:titleBas}, {title:titleObraz}] = procList
const [{lists:listsLab}, {lists:listsBas}, {lists:listsObraz}] = procList



function App() {
	const { items } = useContext(AddProcedureBoxContext);



	const [procBox, setProcBox] = useState(items);

	const [checkbox, setCheckbox] = useState(procList);

	const resetButtonHandler = () => {
		
	};

	const procBoxHandler = (id) => {
    // (id.target.checked)
    // setCheckbox(!checkbox)
		if (id.target.checked) {
			setProcBox([...procBox, id.target.id]);
      console.log(procBox);
		} else {
      const newList = procBox.filter((aa) => aa !== id.target.id);
			setProcBox(newList);
		}
	};

	return (
		<AddProcedureBoxContext.Provider value={procBox}>
			<Header resetButtonHandler={resetButtonHandler}></Header>
			{items !== 0 && <TextBoxProc />}
			<ProcedureContainer>
				<ProcedureBox
					procGroup={labProc}
					addProcFct={procBoxHandler}
					checkbox={checkbox}
				/>
				<ProcedureBox
					procGroup={basicProc}
					addProcFct={procBoxHandler}
					checkbox={checkbox}
				/>
				<ProcedureBox
					procGroup={obrProc}
					addProcFct={procBoxHandler}
					checkbox={checkbox}
				/>
			</ProcedureContainer>
			<label htmlFor="qwe">aaa</label>
			<input
				type="checkbox"
				onChange={(e) => setCheckbox(!e.target)}
			/>
		</AddProcedureBoxContext.Provider>
	);
}
export default App;
