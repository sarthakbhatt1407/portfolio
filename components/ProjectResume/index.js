import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split("$$"));
  console.log(bulletsLocal);

  return (
    <div className="mt-5 w-full flex flex-col mob:flex-col laptop:flex-row justify-between">
      {/* Left Section */}
      <div className="text-lg w-full laptop:w-2/5 mb-4 laptop:mb-0">
        <h2 className="text-base mob:text-lg">{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>

      {/* Right Section */}
      <div className="w-full laptop:w-3/5">
        <h2 className="text-base mob:text-lg font-bold">{position}</h2>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc pl-5">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm mob:text-base my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
