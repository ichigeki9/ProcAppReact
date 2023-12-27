

export default function Table (props) {

  console.log(props.patientData.name);

return  <section className=" w-screen h-full flex flex-col border-2">


{/* <div>
  <form>
    <h2>Dodaj Usługę</h2>

    <div>
      <label for="selectBoxService">Wybierz okno do któego chcesz dodać procedurę :</label>
      <select id="selectBoxService">
        <option value="" selected>Wybierz</option>
        <option value="porada">Porada</option>
        <option value="spejalistyczna">Konsultacja Specjalistyczna</option>
        <option value="labolatoryjna">Diagnostyka Labolatoryjna</option>
        <option value="obrazowa">Diagnostyka Obrazowa</option>
        <option value="diagnostyka">Inna Diagnostyka</option>
        <option value="transport">Transport</option>
        <option value="inne">Inne Świadczenia/Pobyt w SOR</option>
      </select>
    </div>
   

    <div>
      <label for="nameService">Nazwa usługi:</label>
      <input type="text" id="nameService" placeholder="Nazwa usługi" />
    </div>

    <div>
      <label for="priceService">Koszt usługi:</label>
      <input type="number" id="priceService" placeholder="Koszt usługi" />
    </div>




    <div>
      <button>Wyczyść</button>
      <button>Dodaj</button>

    </div>
    <button>x</button>


  </form>
</div> */}

<div>
  <button className="p-5 border-2 m-5">Dodaj Procedure</button>
  <button className="p-5 border-2 m-5">Drukuj</button>
</div>



<div className="border-2 border-red-400 text-2xl">
  <h1>Specyfikacja kosztów do faktury/paragonu za świadczenia udzielane w SOR</h1>
</div>



<div className="text-xl border-4 border-sky-400 mt-2">
  <p className="mt-2">Imię i nazwisko: {props.patientData.name}  </p>
  <p className="mt-2">Adres: {props.patientData.adress} </p>
  <p className="mt-2">Pesel: {props.patientData.pesel} </p>
  <p className="mt-2">Telefon: {props.patientData.telNum} </p>
</div>

<div className="border-4 border-red-600 flex items-center justify-center">
  <table className="border border-black">
    <tbody>
    <tr className="border border-black">
      <th className="border border-black">Nazwa usługi</th>
      <th className="border border-black">Koszt</th>
      <th className="border border-black">Opis świadczenia</th>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Porada</td>
      <td className="border border-black"></td>
      <td className="border border-black"></td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Konsultacja Spejalistyczna</td>
      <td className="border border-black"> </td>
      <td className="border border-black"> </td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Diagnostyka Labolatoryjna</td>
      <td className="border border-black"> </td>
      <td className="border border-black"></td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Diagnostyka Obrazowa</td>
      <td className="border border-black"></td>
      <td className="border border-black"></td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Inna Diagnostyka</td>
      <td className="border border-black"></td>
      <td className="border border-black"></td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Transport</td>
      <td className="border border-black"></td>
      <td className="border border-black"></td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Inne Świadczenia/Pobyt w SOR</td>
      <td className="border border-black"></td>
      <td className="border border-black"></td>
    </tr>
    <tr className="border border-black">
      <td className="border border-black">Razem</td>
      <td className="border border-black"></td>
      <td className="border border-black"></td>
    </tr>
    </tbody>
  </table>
</div>

<div className="border-4 border-green-600 mt-4 flex items-center justify-center">
  <div >
    <p>.......................................</p>
    <p>podpis pracownika</p>
    <p>data............................</p>
  </div>
  <div>
    <p>.................................</p>
    <p>podpis pacjenta</p>
  </div>
</div>

<section>
  <div>
    <p>Ełk, dnia .......................</p>
  </div>
  <div>
    <p>Zostałem poinformowany o tym, iż w ciągu 7 dni od daty zakończenia leczenia na oddziale SOR 1 Szpitala
      Wojskowego z Przychodnią SP ZOZ w Ełku zobowiązuję się dostarczyć dowód ubezpieczenia lub pokryć całkowity koszt
      leczenia w kasie szpitala zgodnie z kartą medyczną. W przypadku uchylania się od uiszczenia w/w zobowiązania 1
      Szpital Wojskowy z Przychodnią SP ZOZ w Ełku wystąpi na drogę postępowania sądowego.</p>
    <div>
      <p>..........................................</p>
    <p>Podpis pacjenta</p>
  </div>
  </div>

  <div>
    <p>Imię i nazwisko: {props.patientData.name} </p>
    <p>Adres: {props.patientData.adress} </p>
    <p>Pesel: {props.patientData.pesel}</p> 
    <p>Telefon: {props.patientData.telNum}</p>
  </div>
  <div>
    <p>Kasa Szpitala nr. tel. 261332985 </p>
    <p>Budynek nr. 72 , I Piętro</p>
    <p>nr konta 59 1130 1206 0028 9003 4420 0003</p>
    <p>BGK oddz. Lublin</p>
  </div>

</section>
</section>

}