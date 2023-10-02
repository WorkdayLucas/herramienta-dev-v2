import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ItemList from "./ItemList";
import VoiceMaker from "../../../global/components/VoiceMaker";

const Item = ({ data, ItemClassName }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={ItemClassName}>
      {data.titulo && (
        <div
          className="titleItemContainer"
          style={{
            display: "flex",
          }}
        >
          <span
            className="expander"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>
          <h3
            style={{
              fontSize: "2rem",
              margin: "0",
            }}
          >
            {data.titulo}
          </h3>
          {typeof data.contenido === "string" && expand && (
            <VoiceMaker
              outVoice={data.contenido}
              VMButtonsClassName="expander"
            />
          )}
        </div>
      )}

      {typeof data.contenido === "string" ? (
        <div style={{ display: "flex" }}>
          <p
            className="contentItem"
            style={{
              textAlign: "left",
              padding: ".5rem",
              display: expand || !data.titulo ? "inline-block" : "none",
            }}
          >
            {data.contenido}
            {!data.titulo && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "flex-end",
                  position: "absolute",
                  margin: ".1rem 0 0 .2rem",
                }}
              >
                <VoiceMaker outVoice={data.contenido} VMButtonsClassName={"voiceControls"}/>
              </span>
            )}
          </p>
        </div>
      ) : (
        <ItemList
          visible={expand}
          listclassName="listaPreguntas"
          dataList={data.contenido}
          ItemChild={Item}
          itemChildClassName="itemPregunta"
        />
      )}
    </div>
  );
};

export default Item;
