import axios from "axios";
import { useState, useEffect } from "react";
function New() {
    const [user, Setuser] = useState({
        name: " ",
        password: " ",
    })
    const handlechane = (e) => {
        Setuser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    const sumbitt = async (e) => {
        try {
            e.preventDefualt();
            const data = await axios.post("sdxgfhgjh", user)
            alert("login done")

        } catch (error) {

        }
    }
}
