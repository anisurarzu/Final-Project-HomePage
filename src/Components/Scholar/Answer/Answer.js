import React from "react";
import Modal from "react-modal";
import "./Answer.css";
import { useForm } from "react-hook-form";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Answer() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/sendAnswer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Your Answer Send Successfully");
        }
      });
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#32a887";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="main">
      <div>
        <button className="btn btn-primary btn-grad" onClick={openModal}>
          Submit Answer
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Answer</h2>
          <div>Submit Your Answer</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="shadow p-3 mb-5 bg-body rounded"
          >
            <input
              ref={register({ required: true })}
              type="text"
              class="form-control"
              placeholder="Your Name"
              name="name"
            />{" "}
            <br />
            <textarea
              ref={register({ required: true })}
              class="form-control"
              placeholder="Copy Your Question Here"
              name="question"
            ></textarea>
            <br />
            <textarea
              ref={register({ required: true })}
              class="form-control"
              placeholder="Write Your Answer Here"
              name="answer"
            ></textarea>
            <br />
            <button class="btn btn-success" type="submit">
              Send
            </button>
          </form>{" "}
          <br />
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  );
}

export default Answer;
