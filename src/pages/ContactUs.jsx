import BaseButton from "../components/BaseButton";
import Loader from "../components/Loader";
// import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!comment || comment.trim().length === 0) {
      toast.error("Comment field is required!");
      setLoading(false);
      return;
    }
 

    try {
    //   const response = await axios.post("/api/contact", data);
      toast.success(
        "Thank you for your comment. We will get back to you shortly"
      );
    } catch (error) {
      toast.error(
        "Failed to send message. Check your internet connection and try again"
      );
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    [
      {
        name: "first name",
        type: "text",
        placeholder: "Your first name",
        id: "first_name",
        value: firstName,
        update: setFirstName,
      },
      {
        name: "last name",
        type: "text",
        placeholder: "Your last name",
        id: "last_name",
        value: lastName,
        update: setLastName,
      },
    ],
    [
      {
        name: "Email Address",
        type: "email",
        placeholder: "Your email address",
        id: "email",
        value: email,
        update: setEmail,
      },
      {
        name: "Phone number",
        placeholder: "Your primary phone number",
        id: "phone_number",
        type: "tel",
        value: phone,
        update: setPhone,
      },
    ],
    [
      {
        name: "order number",
        placeholder: "Your order number if applicable",
        id: "order_number",
        type: "text",
        value: orderNumber,
        update: setOrderNumber,
      },
      {
        name: "title",
        placeholder: "What is your question about?",
        id: "title",
        type: "text",
        value: title,
        update: setTitle,
      },
    ],
  ];

  return (
    <div className="flex text-left flex-col w-[90vw] flex-1 justify-start items-start  md:ml-[8rem] ml-2">
      {loading && <Loader />}
      <h2 className="absolute -top-5 left-0 uppercase">contact us </h2>
      <p className=" w-full text-[18px] mb-5">
        {" "}
        Email Sahara Bath & Scrub Customer Service
        (customerservice@saharabath.com) or call +233 12345678. Operating hours
        are 9:00am – 9:00pm GMT, Monday- Friday and Saturday 9:00am- 6:00pm GMT.
      </p>
      <form onSubmit={sendMessage} className="w-full">
        {inputFields.map((item, i) => (
          <div
            className="flex flex-col md:flex-row justify-between items-center w-full gap-5"
            key={i}
          >
            <div className="flex flex-col w-full justify-start items-start mt-2">
              <label
                className="capitalize font-bold sentence"
                htmlFor={item[0].id}
              >
                {item[0].name}
              </label>
              <input
                className="w-full border-gray-color border-[1px] p-2 placeholder:text-[12px] "
                type={item[0].type}
                name={item[0].name}
                id={item[0].id}
                placeholder={item[0].placeholder}
                // @ts-ignore
                value={item[0].value}
                onChange={(e) => item[0].update(e.target.value)}
              />
            </div>

            <div className="flex flex-col w-full justify-start items-start mt-2">
              <label
                className="capitalize font-bold justify-self-center "
                htmlFor={item[1].id}
              >
                {item[1].name}
              </label>

              <input
                className="w-full border-gray-color border-[1px] p-2 placeholder:text-[12px] "
                type={item[1].type}
                name={item[1].name}
                id={item[1].id}
                placeholder={item[1].placeholder}
                // @ts-ignore
                value={item[1].value}
                onChange={(e) => item[1].update(e.target.value)}
              />
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full justify-start items-start mt-5">
          <label
            className="capitalize font-bold justify-self-center"
            htmlFor="comment"
          >
            Comments *
          </label>
          <textarea
            className="w-full mb-5  border-gray-color border-[1px] p-2 "
            placeholder="Explain your issue (5, 000 characters maximum)"
            name="comments"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <BaseButton
          text="Send"
          bgColor="bg-blue-900"
          textColor="text-slate-100"
          hoverColor="bg-blue-7s00"
          type="submit"
          loading={loading}
        />
      </form>
    </div>
  );
};

export default ContactUs;
