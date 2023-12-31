import React from "react";
import useUsers from "../hooks/useUsers";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Issue = () => {
  const [userInfo] = useUsers();
  const navigate = useNavigate();

  const handleIssue = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const issue = form.issue.value;

    //  console.log(issue);

    axios
      .post("https://vocab-master-server.onrender.com/issue", {
        name,
        email,
        date,
        issue,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          form.reset();
        }
      });
  };

  // bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900

  return (
    <div className="max-h-screen bg-Backs  w-full">
      <div onClick={() => navigate(-1)} className="mt-2 md:mt-5 ms-2 md:ms-20">
        <Icon
          icon="emojione-monotone:left-arrow"
          className="text-4xl text-orange-700"
        />
      </div>

      <div className="w-full max-w-md mx-auto flex justify-center items-center">
        <form
          onSubmit={handleIssue}
          className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
        >
          <div className="mb-4">
            <label
              className=" text-black text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Your Name"
              value={userInfo[0]?.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={userInfo[0]?.email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="date"
              type="input"
              value={moment().format("DD, MMM, yyyy")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="issue"
            >
              Issue
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="issue"
              placeholder="Describe your issue..."
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Issue;
