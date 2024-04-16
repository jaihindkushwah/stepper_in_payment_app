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
        component:()=><div>Personal Info</div>
    },{
        title: "Step 2",
        component:()=><div>Payment</div>
    },
    {
        title: "Step 3",
        component:()=><div>Delivery Address</div>
    },
    {
        title: "Step 4",
        component:()=><div>Review</div>
    },
    {
        title: "Step 5",
        component:()=><div>Confirm to pay</div>
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
