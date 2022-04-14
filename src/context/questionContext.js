import { createContext, useState } from "react";

const QuesContext = createContext();
export const QuestionContext = (props) => {
  const quesArrayInitial = [];
  const [questionArray, setQuestionArray] = useState(quesArrayInitial);
  const port = 5000;
  const host = `http://localhost:${port}`;

  const fetchQuestions = async (url = `${host}/question/getAllQuestion`) => {
    var response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    setQuestionArray(result.data);
    // return result;
  };

  //add a question
  const addQuestion = async (title, description, askedBy, tag) => {
    var response = await fetch(`${host}/api/questions/createQuestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        question: description,
        askedBy: "62572615e2cd81f52341cf2c",
        topics: [],
      }),
    });

    const addedquestion = await response.json();
    if (addedquestion.title && addedquestion.question) {
      setQuestionArray(questionArray.concat(addedquestion));
    } else alert("Title, Description can not be empty");
  };

  const deleteQuestion = async (id) => {
    //part 1 : backend
    var response = await fetch(`${host}/api/questions/deleteQuestion/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    //PART 2 :FRONTEND
    const newquestions = questionArray.filter((question) => {
      return question._id !== id;
    });
    setQuestionArray(newquestions);
  };

  // Edit a question
  const editQuestion = async (id, title, description, tag) => {
    // 1. Update in database:
    const response = await fetch(`${host}/api/questions/updatequestion/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //2. Update on frontend
    // const json = response.json();
    // const newArray=JSON.parse(JSON.stringify(questionArray));
    // for (let index = 0; index < newArray.length; index++) {
    //   const element = newArray[index];
    //   if (element._id === id) {
    //     newArray[index].title = title;
    //     newArray[index].description = description;
    //     newArray[index].tag = tag;
    //     break;
    //   }
    //update the state variable questionArray so that changes reflect on frontend
    const updatedquestion = await response.json();
    const newArray = JSON.parse(JSON.stringify(questionArray)); //this will create a deep copy of questionArray i.e. any changes made to newArray will not reflect to questionArray;
    /*########### IMPORTANT ##############
      if we had written this statement
      => const newArray=questionArray
      then any changes made to newArray would immidietly reflect to questionArray and there would be no effect of using setquestions hook hence the frontend would not be rerendered. 
      */
    const index = newArray.findIndex((question) => {
      return question._id === updatedquestion._id;
    });
    newArray[index] = updatedquestion;
    // console.log("target question:",newArray[index]);
    setQuestionArray(newArray);
    // console.log("questionArray: ",questionArray);
  };
  return (
    <QuesContext.Provider
      value={{ fetchQuestions, editQuestion, addQuestion, deleteQuestion,questionArray }}
    >
      {props.children}
    </QuesContext.Provider>
  );
};

export default QuesContext;
