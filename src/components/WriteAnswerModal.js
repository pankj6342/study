import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WriteAnswerModal = ({ children, quesData }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    answerText: "",
  });
  const { quesId, questionText } = quesData;

  const navigate = useNavigate();
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log(data);
    navigate(`/answers/${quesId}`);
  };

  return !show ? (
    <div onClick={() => setShow((val) => !val)}>{children}</div>
  ) : (
    <div className="fixed inset-0">
      <div className="overflow-y-auto overflow-x-hidden fixed flex z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mx-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg">
              {questionText}
            </div>
            <hr />
            <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              onSubmit={onSubmit}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Write an answer
              </h3>
              <div>
                <label
                  for=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Answer Text
                </label>
                <textarea
                  type="text"
                  name="answerText"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-h-50px"
                  required={true}
                  value={data.answerText}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Post Answer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteAnswerModal;
