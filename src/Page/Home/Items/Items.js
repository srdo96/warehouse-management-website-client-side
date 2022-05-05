import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetAllItems from "../../../hooks/useGetAllItems";
import Card from "../Card/Card";
const Items = () => {
  const [data] = useGetAllItems([]);

  return (
    <div id="items" className=" mt-10">
      <h1 className="text-3xl text-center ">All Items {data.length} </h1>
      <div className="grid items-center  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-10">
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      {/* <Link to=""></Link> */}
      <Link
        to="/manageInventories"
        type="submit"
        className="mt-5  bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex datas-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Items;
