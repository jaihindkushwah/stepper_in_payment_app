import React, { ReactNode } from "react";
import AllStepper from "./components/AllStepper";

type Props = {};
export type stepType = {
  title: string;
  component: () => ReactNode;
};

const allStepData: stepType[] = [
    {
        title: "Step 1",
        component:()=><div>Step 1</div>
    },{
        title: "Step 2",
        component:()=><div>Step 2</div>
    },
    {
        title: "Step 3",
        component:()=><div>Step 3</div>
    },
    {
        title: "Step 4",
        component:()=><div>Step 4</div>
    },
    {
        title: "Step 5",
        component:()=><div>Step 5</div>
    }
];

const App = (props: Props) => {
  return (
    <div className="w-screen min-h-screen">
      <AllStepper data={allStepData} />
    </div>
  );
};

export default App;
