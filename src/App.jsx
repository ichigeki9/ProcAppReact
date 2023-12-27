import Header from "./components/Header";
import "./App.css";
import ProcedureBox from "./components/ProcedureBox";
import ProcedureContainer from "./components/ProcedureContainer";
import TextBoxProc from "./components/TextBoxProc";
import { AddProcedureBoxContext } from "./context/ProceduresContext";
import { useContext, useState } from "react";
import Modal from "./components/Modal";
import Table from "./components/Table";


const badaniaLabolatoryjne = [
	{
		name: "aptt",
		idProc: "G11,",
		price: 16,
		isCheck: false,
	},
	{
		name: "alat",
		idProc: "I17,",
		price: 15,
		isCheck: false,
	},
	{
		name: "aspat",
		idProc: "I19,",
		price: 15,
		isCheck: false,
	},
	{ name: "morfologia", idProc: "C53,", price: 20, isCheck: false },
	{ name: "gazometria", idProc: "89.661,", price: 28, isCheck: false },
	{
		name: "mocz",
		idProc: "A01,",
		price: 20,
		isCheck: false,
	},
	{
		name: "glukoza",
		idProc: "L43,",
		price: 15,
		isCheck: false,
	},
	{ name: "kreatynina", idProc: "M37,", price: 15, isCheck: false },
	{
		name: "mocznik",
		idProc: "N13,",
		price: 15,
		isCheck: false,
	},
	{ name: "jonogram", idProc: "N45,O35,", price: 20, isCheck: false },
	{
		name: "pt",
		idProc: "G21,",
		price: 16,
		isCheck: false,
	},
	{ name: "d-dimery", idProc: "G49,", price: 45, isCheck: false },
	{
		name: "amylaza",
		idProc: "I25,",
		price: 15,
		isCheck: false,
	},
	{
		name: "crp",
		idProc: "I81,",
		price: 18,
		isCheck: false,
	},
	{ name: "bilirubina", idProc: "I89,", price: 15, isCheck: false },
	{
		name: "lipaza",
		idProc: "M67,",
		price: 15,
		isCheck: false,
	},
	{ name: "troponina", idProc: "O61,", price: 37, isCheck: false },
	{
		name: "alkohol",
		idProc: "P31,",
		price: 20,
		isCheck: false,
	},
	{
		name: "covid",
		idProc: "V100,",
		price: 100,
		isCheck: false,
	},
	{
		name: "ck",
		idProc: "M18,",
		price: 15,
		isCheck: false,
	},
	{ name: "prokalcytonina", idProc: "N58,", price: 100, isCheck: false },
];

const podstawowe = [
	{ name: "podstawa", isCheck: false, idProc: "89.00,89.04,89.71,89.73," },
	{ name: "konsultacja", isCheck: false, idProc: "89.02," },
	{ name: "badanie temperatury", isCheck: false, idProc: "99.99902," },
	{ name: "ekg", isCheck: false, idProc: "89.522," },
	{ name: "cewnikowanie", isCheck: false, idProc: "57.01," },
	{ name: "monitorowanie", isCheck: false, idProc: "89.540," },
	{ name: "tlenoterapia", isCheck: false, idProc: "93.96," },
	{ name: "sonda do żołądka", isCheck: false, idProc: "96.07," },
	{ name: "płukanie żołądka", isCheck: false, idProc: "96.34," },
	{ name: "ogrzewanie pacjenta", isCheck: false, idProc: "99.852," },
];

const diagnostykaObrazowa = [
	{ name: "tk", idProc: "89.030,", price: 200, isCheck: false },
	{ name: "rtg kolana", idProc: "88.22,", price: 50, isCheck: false },
];

const resuscytacja = [
	{ name: "sedacja", idProc: "100.51," , isCheck: false },
	{ name: "resuscytacjaBP", idProc: "93.932," , isCheck: false },
	{ name: "znieczulDozyl", idProc: "100.10," , isCheck: false },
	{ name: "znieczulDozyl", idProc: "100.11," , isCheck: false },
	{ name: "resp", idProc: "93.9," , isCheck: false },
	{ name: "intubacja", idProc: "96.04," , isCheck: false },
	{ name: "wentWspRur", idProc: "96.71," , isCheck: false },
	{ name: "przywRytZat", idProc: "99.623," , isCheck: false },
	{ name: "defibrylacja", idProc: "99.624," , isCheck: false },
	{ name: "innaWenMech", idProc: "93.92," , isCheck: false },
	{ name: "ProwRKO", idProc: "99.601," , isCheck: false },
];

const farmakoterapia = [
	{name:"wklucie" ,idProc:"38.93,", isCheck: false},
	{name:"doustna" ,idProc:"99.97900,", isCheck: false},
	{name:"dozylna" ,idProc:"99.97904,", isCheck: false},
	{name:"domiesniowa" ,idProc:"99.97902,", isCheck: false},
	{name:"srodskorna" ,idProc:"99.97905,", isCheck: false},
	{name:"podskorna" ,idProc:"99.97906,", isCheck: false},
    {name:"podjezykowa" ,idProc:"99.97907,", isCheck: false},
	{name:"doodbytnicza" ,idProc:"99.97909,", isCheck: false},
    {name:"nebulizator" ,idProc:"99.97910,", isCheck: false},
	{name:"infuzjaElektrolitow" ,idProc:"99.18,", isCheck: false},
	{name:"trankwilizator" ,idProc:"99.26,", isCheck: false},
	{name:"anatoksyna" ,idProc:"99.38,", isCheck: false}
   ]

   const rtg = [
        
	{name:"rtgNosa"  ,idProc:"87.165," ,isCheck:false, price:80},
	{name:"rtgTwarzoczaszki"  ,idProc:"87.174," ,isCheck:false, price:100},
    {name:"rtgCzaszki"  ,idProc:"87.176," ,isCheck:false, price:100},
	{name:"rtgKrSzyj"  ,idProc:"87.221," ,isCheck:false, price:100},
	{name:"rtgKrPie"  ,idProc:"87.231," ,isCheck:false, price:100},
   {name:"rtgKrLK"  ,idProc:"87.241," ,isCheck:false, price:100},
   {name:"rtgZeber"  ,idProc:"87.431," ,isCheck:false, price:100},
	{name:"rtgObojczykow"  ,idProc:"87.433," ,isCheck:false, price:100},
	{name:"rtgMostka"  ,idProc:"87.432," ,isCheck:false, price:100},
	{name:"rtgKlp"  ,idProc:"87.440," ,isCheck:false, price:100},
   {name:"rtgJB"  ,idProc:"88.191," ,isCheck:false, price:50},
	{name:"rtgBarkRamie"  ,idProc:"88.21," ,isCheck:false, price:80},
	{name:"rtgLokciaPrzedramienia"  ,idProc:"88.22," ,isCheck:false,},
	{name:"rtgNadgDloni"  ,idProc:"88.23," ,isCheck:false, price:80},
	{name:"rtgMiednicyBiodra"  ,idProc:"88.26," ,isCheck:false, price:100},
	{name:"rtgUdaKolanaPodu"  ,idProc:"88.27," ,isCheck:false, price:80},
	{name:"rtgKostki"  ,idProc:"88.28," ,isCheck:false, price:80},
	{name:"rtgLopatek"  ,idProc:"88.331," ,isCheck:false, price:50},
] 
const tomografia = [
	{name:"tkGlowy" ,idproc :"87.030," ,price:400 ,isCheck:false},
	 {name:"tkGlTwarz" ,idproc :"87.034," ,price:450 ,isCheck:false},
	 {name:"tkKrSzyj" ,idproc :"88.383," ,price:400 ,isCheck:false},
  {name:"tkKlp" ,idproc :"87.410," ,price:500 ,isCheck:false},
	 {name:"tkBrzuMie" ,idproc :"88.010," ,price:600 ,isCheck:false},
	 {name:"tkKrSzyj" ,idproc :"88.383," ,price:400 ,isCheck:false},
	{name:"tkKrPie" ,idproc :"88.385," ,price:400 ,isCheck:false},
   {name:"tkKrLe" ,idproc :"88.387," ,price:600 ,isCheck:false}
   ]

   const tkKontrast = [
	{name:"tkGloKon" ,idproc:"87.049," ,price:450, isCheck:false},
	{name:"tkKlpKon" ,idproc:"87.411," ,price:550, isCheck:false},
	{name:"tkBrzuKon" ,idproc:"88.011," ,price:650, isCheck:false},
	{name:"tkInne" ,idproc:"88.38," ,price:950, isCheck:false}
]



const usg = [
{name:"usgBrzu" , idproc:"88.761," ,price:180 ,isCheck:false}
]


const zabiegowe = [
	{name:"opatrunek"  ,idproc:"93.57," ,isCheck:false},
	{name:"oczyszczRan"  ,idproc:"86.289," ,isCheck:false},
	{name:"szycied4"  ,idproc:"86.52," ,isCheck:false},
	{name:"szyciep4"  ,idproc:"86.53," ,isCheck:false},
	{name:"znieczul"  ,idproc:"23.0402," ,isCheck:false},
	{name:"szycieLiczd4R"  ,idproc:"86.54," ,isCheck:false},
	{name:"szucieLiczPow4R"  ,idproc:"86.55," ,isCheck:false},
	{name:"szycieNos"  ,idproc:"21.81," ,isCheck:false},
	{name:"szycieRanyWargi"  ,idproc:"27.51," ,isCheck:false},
	{name:"szycieRanyJamUst"  ,idproc:"27.52," ,isCheck:false},
	{name:"usunCialaObceInne"  ,idproc:"98.20," ,isCheck:false},
	{name:"tampNosa"  ,idproc:"21.03," ,isCheck:false}
 ]

  const zabiegoweInne = [
	  {name:"gipsowanie"  ,idProc:"93.53," ,isCheck:false},
	  {name:"unierK-G" , idProc :"93.5020," ,isCheck:false},
	  {name:"unierK-D" , idpro :"93.5022," ,isCheck:false},
	  {name:"innaSzyna"  ,idProc:"93.549,"  ,isCheck:false},
	  {name:"zamkNastZwi"  ,idProc:"79.70," ,isCheck:false},
	  {name:"zamkNastZla"  ,idProc:"79.00," ,isCheck:false},
	  {name:"załKoł"  ,idProc:"93.521," ,isCheck:false}
   ]





function App() {
	const { items } = useContext(AddProcedureBoxContext);

	const [procBox, setProcBox] = useState(items);

	const [laboState, setLaboState] = useState(badaniaLabolatoryjne);
	const [basicState, setBasicState] = useState(podstawowe);
	const [obrazState, setObrazState] = useState(diagnostykaObrazowa);
	const [resuscytacjaState, setResuscytacjaState] = useState(resuscytacja);
	const [farmakoterapiaState, setFarmakoterapiaState] = useState(farmakoterapia);
	const [rtgState, setRtgState] = useState(rtg);
	const [tomografiaState, setTomografiaState] = useState(tomografia);
	const [tkKontrastState, setTkKontrastState] = useState(tkKontrast);
	const [usgState, setUsgState] = useState(usg);

	const [zabiegoweState, setZabiegoweState] = useState(zabiegowe);
	const [zabiegoweInneState, setZabiegoweInneState] = useState(zabiegoweInne);


	const [showFirstModal, setShowFirstModal] = useState(false);

	const [patientData, setPatientData] = useState({})

	const handleCheckBoxLabChange = (value, index, nameProc) => {
		setLaboState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		// console.log(procBox);
		addProcBox(value, nameProc);
	};

	const handleCheckBasicLabChange = (value, index, nameProc) => {
		setBasicState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleCheckObrazLabChange = (value, index, nameProc) => {
		setObrazState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleCheckResusLabChange = (value, index, nameProc) => {
		setResuscytacjaState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};
	
	const handleCheckFarmTerLabChange = (value, index, nameProc) => {
		setFarmakoterapiaState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleRtgLabChange = (value, index, nameProc) => {
		setRtgState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleTomografiaLabChange = (value, index, nameProc) => {
		setTomografiaState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleTkKontrastLabChange = (value, index, nameProc) => {
		setTkKontrastState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleUsgLabChange = (value, index, nameProc) => {
		setUsgState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleZabiegLabChange = (value, index, nameProc) => {
		setZabiegoweState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};

	const handleZabiegInneLabChange = (value, index, nameProc) => {
		setZabiegoweInneState((prevState) => {
			prevState[index].isCheck = !value;
			return [...prevState];
		});
		addProcBox(value, nameProc);
	};





	const addProcBox = (value, nameProc) => {
		if (value === false) {
			setProcBox([...procBox, nameProc]);
		} else {
			const newList = procBox.filter((aa) => aa !== nameProc);
			setProcBox(newList);
		}
	};

	function resetButtonHandler() {
		setProcBox([]);
		laboState.forEach((el) => (el.isCheck = false));
		basicState.forEach((el) => (el.isCheck = false));
		obrazState.forEach((el) => (el.isCheck = false));
		resuscytacjaState.forEach((el) => (el.isCheck = false));
		farmakoterapiaState.forEach((el) => (el.isCheck = false));
	}
	function showModal() {
		setShowFirstModal(true);
	}
	function closeModal() {
		setShowFirstModal(false);
	}
	function closeModal() {
		setShowFirstModal(false);
	}



	return (
		<AddProcedureBoxContext.Provider value={procBox}>
			<Header
				resetButtonHandler={resetButtonHandler}
				showModal={showModal}></Header>
			{items !== 0 && <TextBoxProc />}
			<ProcedureContainer>
				<ProcedureBox
					procGroup={[laboState, "Badania Labolatoryjne"]}
					addProcFct={handleCheckBoxLabChange}
				/>
				<ProcedureBox
					procGroup={[basicState, "Podstawowe"]}
					addProcFct={handleCheckBasicLabChange}
				/>
				<ProcedureBox
					procGroup={[obrazState, "Diagnostyka Obrazowa"]}
					addProcFct={handleCheckObrazLabChange}
				/>
				<ProcedureBox
					procGroup={[resuscytacjaState, "Resuscytacja"]}
					addProcFct={handleCheckResusLabChange}
				/>
				<ProcedureBox
					procGroup={[farmakoterapiaState, "Farmakoterapia"]}
					addProcFct={handleCheckFarmTerLabChange}
				/>
				<fieldset className="border-2 border-black space-y-3">
			<legend className="text-2xl">Diagnostyka Obrazowa</legend>
			<ProcedureBox
					procGroup={[rtgState, "Rtg"]}
					addProcFct={handleRtgLabChange}
				/>
			<ProcedureBox
					procGroup={[tomografiaState, "Tomografia"]}
					addProcFct={handleTomografiaLabChange}
				/>
			<ProcedureBox
					procGroup={[tkKontrastState, "Tomografia z Kontrastem"]}
					addProcFct={handleTkKontrastLabChange}
				/>
			<ProcedureBox
					procGroup={[usgState, "Usg"]}
					addProcFct={handleUsgLabChange}
				/>
					</fieldset>
					<fieldset className="border-2 border-black space-y-3">
			<legend className="text-2xl">Zabiegowe</legend>
			<ProcedureBox
					procGroup={[zabiegoweState, ]}
					addProcFct={handleZabiegLabChange}
				/>			<ProcedureBox
					procGroup={[zabiegoweInneState, "Zabiegowe Inne"]}
					addProcFct={handleZabiegInneLabChange}
				/>
				</fieldset>

			</ProcedureContainer>
			{showFirstModal && <Modal closeModal={closeModal} setPatientData={setPatientData} />}
			<Table patientData={patientData}/>
		</AddProcedureBoxContext.Provider>
	);
}
export default App;
