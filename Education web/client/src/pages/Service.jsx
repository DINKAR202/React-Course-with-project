import { useAuth } from "../store/auth";

const Service = () => {
  const { services, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(services)) {
    console.error("Services data is not an array:", services);
    return <div>Error: Services data is not available</div>;
  }

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="/images/design.png" alt="design" width="200" />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
