import { useAuth } from "../store/auth";

const Service = () => {
  const services = useAuth();
  console.log("Type of services:", typeof services);

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {/* {Array.isArray(services) &&
          services.map((curElem, index) => {
            // const { price, description, provider, service } = curElem;
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src="/images/design.png" alt="design" width="200" />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{curElem.provider}</p>
                    <p>{curElem.price}</p>
                  </div>
                  <h2>{curElem.service}</h2>
                  <p>{curElem.description}</p>
                </div>
              </div>
            );
          })} */}
      </div>
    </section>
  );
};

export default Service;
