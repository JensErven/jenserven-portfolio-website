import React from "react";

const Step3 = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div className="rounded-lg  p-4 bg-slate-900 shadow-inner shadow-slate-700">
      <div className=" rounded-lg  text-left  flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-whitesmoke text-center">
          Step 3: Links
        </h2>
        <div className="step-content">
          <label>
            <p className="text-white">Github repository url:</p>
          </label>
          <input
            className="w-full px-3 py-2 text-white bg-slate-800 rounded"
            placeholder="vb. github url"
            type="text"
            value={formData.githubUrl}
            onChange={(e) =>
              setFormData({ ...formData, githubUrl: e.target.value })
            }
          />
        </div>
        <div className="step-content">
          <label>
            <p className="text-white">Website url:</p>
          </label>
          <input
            className="w-full px-3 py-2 text-white bg-slate-800 rounded"
            placeholder="vb. website url"
            type="text"
            value={formData.websiteUrl}
            onChange={(e) =>
              setFormData({ ...formData, websiteUrl: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
