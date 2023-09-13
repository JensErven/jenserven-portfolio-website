export default function Page({ params }: { params: { projectId: number } }) {
  console.log(params.projectId);
  return (
    <div
      className="flex w-full  mt-40 rounded-lg p-4 items-center justify-center shadow-lg"
      style={{ minHeight: "75vh", backgroundColor: "#242e47" }}
    >
      <h1>{params.projectId}</h1>
    </div>
  );
}
