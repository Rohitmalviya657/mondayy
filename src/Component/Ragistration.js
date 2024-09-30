import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Ragistraion() {
    const [user, Setuser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const usennevagate = useNavigate();
    const handle = (e) => {
        Setuser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    const handelsumbit = async (e) => {
        e.preventDefault()
        try {

            const submit = await axios.post("http://localhost:4001/user/create", user);
            alert("user saved")
            usennevagate("/login");

        } catch (error) {
            alert("Something rong")

        }


    }

    return (
        <>
            <form onSubmit={handelsumbit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    value={user.name}
                    onChange={handle}
                    required
                />
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} onChange={handle} name='email' />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"   >Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" value={user.password} onChange={handle} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )


}
export default Ragistraion;