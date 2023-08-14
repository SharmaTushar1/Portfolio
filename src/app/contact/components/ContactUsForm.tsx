// ? Contact me form. Here, I'll receive the mail.
// Name, Email, Title, Body

// used https://web3forms.com/platforms/nextjs-contact-form. Amazing amazing tool. Surjith is such a cool guy for helping me with this.

'use client';

type formInput = {
  name: string,
  email: string,
  title: string,
  body: string,
}
import { useState } from "react";

export default function ContactUsForm() {
  const accessKey: string = '6ddaf253-4506-417f-afb0-afb77fb5fa4c';
  const [result, setResult] = useState("");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = async (event: any) => {
    event.preventDefault();
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
      <h1 className="text-6xl font-bold">Contact</h1>
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="">Name: </label>
          <input className="mt-2" type="text" required name="name" id="name" value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="">Email: </label>
          <input className="mt-2" type="email" required name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="">Title: </label>
          <input className="mt-2" type="text" required name="title" id="" value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="">Body: </label>
          <textarea className="mt-2" name="body" required id="body" value={body} onChange={e=>setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" className="p-2 mt-4 mx-auto bg-zinc-200 dark:bg-zinc-800 w-fit px-4 rounded-full" />
      </form>
      <span>{result}</span>
    </div>
  );
}