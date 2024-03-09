import Image from "next/image";
export default function Home() {
  return (
    <div className="w-2/3 mx-auto my-12">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="id" className="text-white" type="text" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            id="address"
            className="text-white"
            type="text"
          />
        </div>
        <div>
          <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
