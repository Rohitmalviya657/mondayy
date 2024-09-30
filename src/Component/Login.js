import axios from "axios"
import { useState } from "react"

function Login() {
    const [find, Setfind] = useState({
        email: "",
        password: ""
    })
    const handlechange = (e) => {
        Setfind({
            ...find,
            [e.target.name]: e.target.value
        })

    }
    const functhandlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4001/user/login", find);

            alert("login succesfully done")
            console.log(response.data);


        } catch (error) {
            alert("something rong");

        }

    }
    return (
        <>

            <form onSubmit={functhandlesubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={find.email} onChange={handlechange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={find.password} onChange={handlechange} name="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Login;