import axios from "axios";

const Login = () => {
  //reqres registered sample user
  const loginPayload = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://reqres.in/api/login",
        loginPayload
      );

      const token = data?.token;

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" name="password" />
      <br></br>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Login;
