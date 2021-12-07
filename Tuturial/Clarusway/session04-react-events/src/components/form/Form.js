import { useState } from "react";
import "./styles.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  /*  ın one state */
  /*  const [values, setValues] = useState({name:"",email:"",country:""})
  const handleValues=(e)=>{
    setValues({...values,[e.target.name]: e.target.value})

  } */

  const killInputs = () => {
    setName("");
    setEmail("");
    setCountry("");
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSelect = (e) => {
    setCountry(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}. You signed up with ${email} acoount from ${country}`);
    /* alert(
       `Hello ${values.name}. You signed up with ${values.email} acoount from ${values.country}`
     ); */
    killInputs();
  };
  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username: {name}</strong>{" "}
            {/*  <strong>Username: {values.name}</strong>{" "} */}
          </label>
          <br />
          <input
            type="text"
            placeholder="name"
            onChange={handleName}
            /* onChange={handleValues} */
            /*  name="name" */
            value={name}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail: {email}</strong>{" "}
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: </strong>
          </label>
          <br />
          <input type="password" placeholder="pass" value="1234" />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country:{country} </strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            onChange={handleSelect}
            value={country}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
