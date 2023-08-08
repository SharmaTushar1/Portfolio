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

import { ErrorMessage, Field, Form, Formik } from "formik";

export default function ContactUsForm() {
  const accessKey = process.env.NEXT_PUBLIC_MAIL_ACCESS_API_KEY;
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', title: '', body: '' }}
        validate={values => {
          const errors: formInput = {} as formInput;
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.body) {
            errors.body = 'Required';
          }
          return errors;
        }}
        onSubmit={async (data, e) => {
          console.log(data);
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            } as HeadersInit,
            body: JSON.stringify({data, access_key: accessKey}),
          })
            .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                window.location.href = "success.html"; // <-- add this line
              }
            }
            );
        }}
      >
        {({isSubmitting}) => (
          <Form className="flex flex-col w-[90%] sm:w-[60%] items-center justify-center mx-auto" action={'https://api.web3forms.com/submit'} method="POST">
            <input type="hidden" name="access_key" value={process.env.MAIL_ACCESS_API_KEY}></input>
            <div className="w-full mb-2">
              <label htmlFor="name">Name: </label>
              <Field type="name" name="name" className="w-full"/>
              <ErrorMessage name="name" component="div" className="text-red-300" />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="email">Email: </label>
              <Field type="email" name="email" className="w-full"/>
              <ErrorMessage name="email" component="div" className="text-red-900" />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="title">Title: </label>
              <Field type="title" name="title" className="w-full"/>
              <ErrorMessage name="title" component="div" className="text-red-900" />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="body">Body: </label>
              <Field type="body" name="body" className="w-full"/>
              <ErrorMessage name="body" component="div" className="text-red-900" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}