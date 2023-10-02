import React from "react";

const ItemList = ({
  listclassName,
  dataList,
  ItemChild,
  itemChildClassName,
  visible,
}) => {
  return (
    <div
      className={listclassName}
      style={{ display: visible ? "block" : "none" }}
    >
      <ul>
        {dataList.map((data, i) => (
          <ItemChild key={i} ItemClassName={itemChildClassName} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
