import { forwardRef } from "react";

type Props = {
  title: String;
  index: number;
  curIndex: number;
};

const Step=forwardRef<HTMLDivElement,Props>((props,ref)=> {
  const { title, index} = props;
  const isComplete = props.curIndex >= props.index+1;
  return (
    <div className="flex justify-center items-center flex-col z-20">
      <p
        ref={ref}
        className={
          "rounded-full bg-slate-500 p-3 text-center " +
          (isComplete ? " bg-green-500 text-white pr-5 pl-5" : "pr-5 pl-6 text-center")
        }
      >
        {isComplete ? (
          <span className="font-bold text-2xl">{"✓"}</span>
        ) : (
          <span
            className="font-normal text-2xl text-white"
          >
            {index + 1}
          </span>
        )}
      </p>
      <p className="mt-5">{title}</p>
    </div>
  );
});

export default Step;
