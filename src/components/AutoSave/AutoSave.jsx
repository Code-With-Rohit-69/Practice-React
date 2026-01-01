import React, { useEffect, useRef, useState } from "react";
import "./AutoSave.css";

const AutoSave = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  useEffect(() => {
    const prevData = localStorage.getItem("data");
    if (prevData) {
      setData(JSON.parse(prevData));
    }
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const handler = setTimeout(() => {
      localStorage.setItem("data", JSON.stringify(data));
    }, 500);

    return () => clearTimeout(handler);
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClear = () => {
    const emptyData = { name: "", email: "", msg: "" };
    setData(emptyData);
    localStorage.removeItem("data");
  };

  return (
    <div className="w-full h-screen p-4 pt-10">
      <h1 className="text-center text-3xl font-semibold mt-2">
        Auto Save Form
      </h1>

      <form className="mt-10 flex flex-col items-center gap-4">
        <div className="input-field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            className="border"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            className="border"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="msg">Message: </label>
          <textarea
            id="msg"
            className="resize-none border"
            value={data.msg}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="border px-4 py-1 cursor-pointer"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default AutoSave;
