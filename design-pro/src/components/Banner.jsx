import React from "react";
import Form from "react-bootstrap/Form";

const Banner = () => {
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
      <Form className="w-50 mt-n5">
      <h4 className="text-center">Enter Your Comments Post Content</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter here content</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button className="btn btn-secondary">Submit</button>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Analysis Result</Form.Label>
          <Form.Control type="text" placeholder="Analysis......" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Banner;
