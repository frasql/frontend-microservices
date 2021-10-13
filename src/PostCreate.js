import React, {useState} from "react";


const PostCreate = () => {
    const [title, setTitle] = useState('');


    async function FetchPost(url, data) {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(data) 
        }

        const req = new Request(url, options);

        const resp = await fetch(req);

        if (resp.ok) {
            let result = await resp.json();
            return result
        } else {
            console.log("POST Erorr")
        }

    }


    const onSubmit = (event) => {
        event.preventDefault();
        FetchPost("http://posts.com/posts/create/", {title})
        .then(resp => {console.log(resp)})
    }

    return (

        <section className='section'>
            <div className='container'>
                <form method="POST" className='form' onSubmit={onSubmit}>
                    <div className='field'>
                        <label className='label'>Title</label>
                        <div className='control'>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
                        </div>
                    </div>
                    <button className='button is-info is-hoverable'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default PostCreate;