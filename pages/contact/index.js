import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import MenuList from "../../components/menuList/MenuList";
import TopBar from "../../components/productSection/TopBar";

const ContactPage = () => {
  const topBarTitle = "Contact";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactStyle>
      <MenuList />
      <div className="mainContactSection">
        <TopBar title={topBarTitle} />
        <div className="contactSection">
          <div className="sectionTitle">
            <h3>Contact Us</h3>
          </div>

          <div className="formAndInfo">
            <div className="formWrap">
              <form ref={form} onSubmit={sendEmail}>
                <label>Enter your Name</label>
                <input type="text" name="user_name" />
                <label>Email Address</label>
                <input type="email" name="user_email" />
                <label>Message Subject</label>
                <input type="text" name="user_subject" />
                <label>Enter your Message</label>
                <textarea name="user_message" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default ContactPage;

const ContactStyle = styled.div`
  display: flex;
  padding: 0 10%;
  gap: 5%;

  .mainContactSection {
    width: 100%;
  }
`;
