import React from "react";

const Step4 = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // Update form data with uploaded files
    setFormData({
      ...formData,
      images: formData.images ? [...formData.images, ...files] : files,
    });
  };
  const handleDeleteImage = (index: number) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };
  return (
    <div className="rounded-lg  p-4 bg-slate-900 shadow-inner shadow-slate-700">
      <h2 className="text-2xl font-semibold mb-4 text-whitesmoke text-center">
        Stap 4: upload project afbeeldingen
      </h2>
      <input
        className=" w-full bg-slate-800 border-2  border-slate-500 border-dashed rounded-md h-20"
        type="file"
        multiple
        onChange={handleImageUpload}
      />

      <div className=" flex flex-wrap gap-y-4">
        {formData.images &&
          formData.images.map((image, index: number) => (
            <div key={index} style={{ position: "relative", width: "50%" }}>
              <img
                className="rounded-md"
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                style={{
                  width: "250px",
                  height: "auto",
                }}
              />
              <button
                className="w-8 h-8 flex flex-row items-center justify-center absolute right-6 top-2 bg-red-500 text-stone-200 rounded-md"
                onClick={() => handleDeleteImage(index)}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Step4;
