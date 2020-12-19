import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonPimary from "../ButtonPrimary/ButtonPimary";
import { toast } from "react-toastify";

export default function ContactComponent() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
      toast.info("One moment please. Your message is being sent...");
      setTimeout(function () {
        toast.success("Message sended. Thank you for your contact!");
      }, 3000);
    },
  });

  return (
    <section id="contact">
      <div className="content">
        <div className="contact-form">
          <h1>Contact me</h1>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum"
          </p>
          <form onSubmit={formik.handleSubmit}>
            <input
              className={formik.errors.name ? "has-error" : ""}
              autoComplete="new_name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
            />

            <input
              className={formik.errors.email ? "has-error" : ""}
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
            <input
              className={formik.errors.subject ? "has-error" : ""}
              autoComplete="off"
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
            />
            <textarea
              className={formik.errors.message ? "has-error" : ""}
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
            ></textarea>
            <div className="actions">
              <ButtonPimary type="submit">Send</ButtonPimary>
            </div>
          </form>
        </div>
        <div className="contact-map"></div>
      </div>
    </section>
  );
}

function initialValues() {
  return {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    subject: Yup.string().required(true),
    message: Yup.string().required(true),
  };
}
