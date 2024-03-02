async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const LearnDataFetching = async () => {
  const data = await getData();
  console.log("Data: ", data);
  return (
    <>
      {data.map((post, i) => (
        <div key={i}>
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
        </div>
      ))}
    </>
  );
};

export default LearnDataFetching;
