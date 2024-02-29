import { useEffect } from "react";
import "./counter.css";

const Counter = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(".counter-numbers");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const animateCounter = (target) => {
    const startValue = 0;
    const endValue = parseInt(target.getAttribute("data-number"), 10);
    let current = startValue;
    const increment = endValue > startValue ? 1 : -1;
    const duration = Math.abs(endValue - startValue) * 10;

    const interval = setInterval(() => {
      current += increment;
      target.textContent = current;

      if (current === endValue) {
        clearInterval(interval);
      }
    }, duration / Math.abs(endValue - startValue));
  };

  return (
    <section className="section mt-4 section-work-data">
      <div className="container d-flex justify-content-between flex-wrap p-4">
        <div>
          <h2 className="counter-numbers" data-number={100}>
            0+
          </h2>
          <p>Course completed</p>
        </div>
        <div>
          <h2 className="counter-numbers" data-number={1500}>
            0+
          </h2>
          <p>Happy Clients</p>
        </div>
        <div>
          <h2 className="counter-numbers" data-number={1200}>
            0+
          </h2>
          <p>Instructor</p>
        </div>
        <div>
          <h2 className="counter-numbers" data-number={1300}>
            0+
          </h2>
          <p>real professionals</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
