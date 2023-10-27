import React from "react";
import Form from "react-bootstrap/Form";
import './Banner.css'

const Banner = () => {
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center full-Banner">
      <Form className="w-50 mt-n5 box-model p-4">
      <h4 className="text-center text-light">Enter Your Comments Post Content</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light">Enter your here content</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-secondary me-4 text-light">Submit</button>
        <button className="btn btn-secondary">Clear</button>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-light">Analysis Result</Form.Label>
          <Form.Control type="text" placeholder="Analysis......" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Banner;
