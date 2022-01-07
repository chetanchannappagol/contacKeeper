import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../Contexts/Alert/AlertContext";
import ContactContext from "../../Contexts/Contacts/ContactContext";
import "./style.css";

export default function Form() {
  const context = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  useEffect(() => {
    if (context.selected !== null) {
      setContact(context.selected);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [context.selected]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type, password } = contact;

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (name === "" || email === "") {
      alertContext.setAlert({
        alert: "Name or Email is empty",
        type: "warning",
      });
    } else {
      if (context.selected === null) {
        contact.id = Math.random();
        context.Add(contact);
      } else {
        context.EditContact(contact);
      }
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  };

  const onClear = () => {
    context.clearContact();
  };

  return (
    <form>
      <span> {context.selected !== null ? "Edit" : "Add"} Contact</span>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => onChange(e)}
        value={name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
        value={email}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone No"
        onChange={(e) => onChange(e)}
        value={phone}
      />
      <div className="type">
        <label>Content Type</label>
        <div>
          <input
            id="per"
            type="radio"
            name="type"
            onChange={(e) => onChange(e)}
            value={"personal"}
            checked={type === "personal"}
          />
          <label htmlFor="per">Personal</label>
          <input
            id="pro"
            type="radio"
            name="type"
            onChange={(e) => onChange(e)}
            value={"professional"}
            checked={type === "professional"}
          />
          <label htmlFor="pro">Professional</label>
        </div>
      </div>
      <input
        className="button"
        onClick={() => onSubmit()}
        type="button"
        value={context.selected !== null ? "Edit Contact" : "Add Contact"}
      />
      {context.selected !== null && (
        <input
          className=""
          onClick={() => onClear()}
          type="button"
          value={"Clear"}
        />
      )}
    </form>
  );
}
