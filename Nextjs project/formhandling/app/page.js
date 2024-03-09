import Image from "next/image";
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <form action="">
        <div>
          <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted">Help text</small>
            <Button>hi</Button>
          </div>
          
        </div>
      </form>
    </div>
  );
}
