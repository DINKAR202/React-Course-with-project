import data from "./skills.json";

const Skills = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="progress-under">
            <h1 className="main-heading">Skills</h1>

            <div className="boxes">
              {data.map((curSkill, index) => (
                <div className={`upper-loading skill-${index + 1}`} key={curSkill.id}>
                  <div className="label-control">
                    <label className="progress-label">{curSkill.label}</label>
                    <label className="progress-label">
                      {curSkill.percentage}
                    </label>
                  </div>
                  {/* over */}

                  // done
                  <div className={`Loading skill-${index + 1}-loading`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Skills;
