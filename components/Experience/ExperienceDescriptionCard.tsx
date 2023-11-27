export default function ExperienceDescriptionCard({ exp }) {
  return (
      <div className="border rounded dark:border-white-2 p-4 shadow-xl w-full  bg-white dark:bg-gray-800">
        <h1 className="font-bold">{exp.title}</h1>
        <p className= "text-gray-500">{exp.company}</p>
        <p className= "text-gray-600">{exp.desc}</p>
      </div>
  );
}
