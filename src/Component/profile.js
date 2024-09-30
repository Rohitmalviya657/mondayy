import axios from "axios"
import { useState } from "react"

function Profile() {
    const [profile, Setprofile] = useState({
        email: "",
        name: ""
    })
    const handlechange = (e) => {
        e.preventDefault();
        Setprofile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }
    const submitt = async (e) => {
        e.preventDefault();
        try {
            const data = axios.put("http://localhost:4001/user/update", profile);
            alert("update done");
            console.log(data.data);

        } catch (error) {
            console.log("something occures");


        }


    }

    return (
        <>


            <form onSubmit={submitt}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={profile.email} onChange={handlechange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={profile.name} onChange={handlechange} name="name" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )



}
export default Profile