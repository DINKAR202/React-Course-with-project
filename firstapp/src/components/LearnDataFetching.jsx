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
          <h1>Title: {post.title}</h1>
          <h1>Body: {post.body}</h1>
        </div>
      ))}
    </>
  );
};

export default LearnDataFetching;
