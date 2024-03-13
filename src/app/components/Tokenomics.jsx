import React from "react";
import Piecircle from "./Piecircle";

function Tokenomics() {
  return (
    <div className="bg-white rounded-lg text-black mt-4 max-md:hidden">
      <div className="max-w-fit my-8 p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
        <h3 className="text-xl font-semibold mb-6">Initial Distribution</h3>
        <div className=" -ml-48 my-4">
          <Piecircle />
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Voluptat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
}

export default Tokenomics;
