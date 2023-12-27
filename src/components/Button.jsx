

export default function Button(props) {
    return    <>
    <button className=" px-5 py-3 rounded-xl bg-sky-500 text-white text-xl hover:bg-sky-700 transition-colors" onClick={props.openNextModal} >{props.title}</button>
    </>
}
