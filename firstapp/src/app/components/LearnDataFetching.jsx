async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const LearnDataFetching = async () => {
  const data = await getData();
  console.log("Data: ", data);
  return <div>LearnDataFetching</div>;
};

export default LearnDataFetching;
