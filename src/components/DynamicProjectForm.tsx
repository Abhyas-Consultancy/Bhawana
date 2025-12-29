import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projectFormConfig } from "./projectFormConfig";




export default function DynamicProjectForm({ project }: { project: string }) {
  const [showConsent, setShowConsent] = useState(false);
  const steps = projectFormConfig[project];
  const [step, setStep] = useState(0);
  const [data, setData] = useState<any>({});

  const currentStep = steps[step];

  const handleChange = (name: string, value: any) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    console.log("SUBMITTED:", { project, ...data });
  };

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-xl">{currentStep.title}</h3>

      {currentStep.fields.map((f) => (
        <div key={f.name}>
          <label className="text-sm font-medium">{f.label}</label>

          {f.type === "select" ? (
            <select
              className="w-full border p-2 rounded"
              onChange={(e) => handleChange(f.name, e.target.value)}
            >
              <option>Select</option>
              {f.options?.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <Input
              type={f.type}
              onChange={(e) => handleChange(f.name, e.target.value)}
            />
          )}
        </div>
      ))}

      <div className="flex justify-between pt-4">
        {step > 0 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}

        {step < steps.length - 1 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
          
        )}
      </div>
    </div>
  );
}
