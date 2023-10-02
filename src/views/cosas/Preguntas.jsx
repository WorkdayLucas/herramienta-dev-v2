import React, { useState } from "react";
import ItemList from "./componetnes/ItemList";
import Item from "./componetnes/Item";
import auxData from "./auxData/preguntas-respuestas.json"
import './styles/style.css'
import Search from "./componetnes/Search";

const Preguntas = () => {
  const [search, setSearch] = useState();

  const [datos, setDatos] = useState(auxData);
  const [datosFiltrados, setDatosFiltrados] = useState(auxData);

  const [jsonData, setJsonData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtiene el primer archivo seleccionado

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setJsonData(data);
        } catch (error) {
          console.error('Error al analizar el archivo JSON:', error);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="vista titulos" style={{}}>
      <h1>Preguntas generales para un programador</h1>
      {/* <input type="file" onChange={handleFileChange} /> */}
      <Search datos={datos} search={search} setSearch={setSearch} setResult={setDatosFiltrados} critero={"titulo"}/>
      <ItemList listclassName="listaPreguntas" dataList={datosFiltrados.length? datosFiltrados : datos} ItemChild={Item} itemChildClassName="itemPregunta" visible={true}/>
    </div>
  );
};

export default Preguntas;
