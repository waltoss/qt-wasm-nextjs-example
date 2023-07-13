import React, { useEffect, useRef, useState } from "react";

export default function QtWasmComponent({ props }) {
  const loaderRef = useRef(undefined);
  const [counter, setCounter] = useState(0);

  const loadWASM = async () => {
    const script = document.createElement("script");
    script.src = "qtloader.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = async () => {
      const canvas = document.querySelector("#screen");
      loaderRef.current = QtLoader({
        canvasElements: [canvas],
        showLoader: function (loaderStatus) {},
        showError: function (errorText) {},
        showExit: function () {},
        showCanvas: function () {
          canvas.style.display = "block";
        },
      });
      await loaderRef.current.loadEmscriptenModule("qt-wasm-component");
    };
  };

  const updateNumber = () => {
    loaderRef.current.module().updateLabel(counter + 1);
    setCounter(counter + 1);
  };

  useEffect(() => {
    loadWASM();
  }, []);

  return (
    <div>
      <div id="screen" style={{ width: "100%", height: 100 }}></div>
      <button onClick={updateNumber}>Click on this React Button</button>
    </div>
  );
}
