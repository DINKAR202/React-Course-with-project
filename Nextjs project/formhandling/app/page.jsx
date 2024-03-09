import Image from "next/image";
import fs from "fs/promises"

export default function Home() {

  const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("address"))
    let a = await fs.writeFile("harry.txt", "Hey I am good")
    console.log(a)
    
  }

  return (
    <div className="w-2/3 mx-auto my-12">
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="id" className="text-black" type="text" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            id="address"
            className="text-black"
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
