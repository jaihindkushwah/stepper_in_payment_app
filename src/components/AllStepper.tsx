import React, {useEffect, useState } from "react";
import Step from "./Step";
import { stepType } from "../App";

type Props = {
  data: stepType[];
};

const AllStepper = (props: Props) => {
  const [margins,setMargin]=useState(0);
  const refs=React.useRef<HTMLDivElement[]>([]);
  const [curIndex, setCurIndex] = React.useState(0);
  const { data } = props;

  useEffect(()=>{

    setMargin(refs?.current[0]?.offsetWidth || 0);

  },[refs]);
  const bgPercentage = (curIndex / (data.length-1)) * 100;

  console.log(margins);


  // console.log(bgPercentage);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className=" w-full relative t-0 flex justify-center">
        <div className="flex w-full  justify-between pl-10 pr-10 mt-4">
          {data.map((step, index) => {
            return (
              <Step
                key={index}
                ref={(el:HTMLDivElement)=>{refs.current[index]=el;}}
                index={index}
                curIndex={curIndex}
                title={step.title}
              />
            );
          })}
        </div>
        <div
          className={` h-[3px] rounded-sm absolute top-10 z-10`}
          style={{
            background: `linear-gradient(to right,rgb(34 197 94) calc(${bgPercentage}%), rgb(100,116,139)calc(${bgPercentage}%)`,
            width: `calc(100% - ${2*margins}px)`,
          }}
        ></div>
      </div>
      <div>
        {curIndex < data.length ? (
          <button
            className="text-black bg-gray-300 rounded-full p-3 pl-10 pr-10 font-bold"
            onClick={() => setCurIndex(curIndex + 1)}
          >
            Next
          </button>
        ) : null}
      </div>
      <div>
        {
          curIndex < data.length ? data[curIndex].component() : null
        }
      </div>
    </div>
  );
};
export default AllStepper;
