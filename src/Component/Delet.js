import axios from "axios";
import { useState } from "react"
function D1() {
    const [de, Setde] = useState({
        email: ""
    })
    const dele = (e) => {
        e.preventDefault();
        Setde({
            ...de,
            [e.target.name]: e.target.value
        })
    }
    const handelsubmit = async (e) => {
        e.preventDefault();
        try {
            const dataa = await axios.delete("http://localhost:3000/user/delet", de)
            alert("deleted")

        } catch (error) {
            alert("not deleted");

        }
    }
    return (
        <>
            <form onSubmit={handelsubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={de.email} onChange={dele} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <input type="submit" />
                </div>
            </form>

        </>
    )
}
export default D1;