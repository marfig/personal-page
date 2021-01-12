import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ButtonPimary from "../ButtonPrimary/ButtonPimary";
import SimpleMap from "../Maps/SimpleMap";
import useMain from "../../hooks/useMain";
import Loader from "../Loader/Loader";

export default function ContactComponent() {
  const { loadingPage, setLoading } = useMain();
  const [progressBar, setProgressBar] = useState("init-progress-bar");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
      toast.info("One moment please. Your message is being sent...");
      setTimeout(function () {
        toast.success("Message sended. Thank you for your contact!");
        formik.resetForm();
      }, 3000);
    },
  });

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 2000);
    setProgressBar("progress-bar");
    return () => {
      clearTimeout(timer1);
    };
  }, [loadingPage]);

  if (loadingPage)
    return (
      <section id="about">
        <div className="content">
          <Loader progressBar={progressBar}>Cargando...</Loader>
        </div>
      </section>
    );
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
              value={formik.values.name}
              onChange={formik.handleChange}
            />

            <input
              className={formik.errors.email ? "has-error" : ""}
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <input
              className={formik.errors.subject ? "has-error" : ""}
              autoComplete="off"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
            <textarea
              className={formik.errors.message ? "has-error" : ""}
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
            ></textarea>
            <div className="actions">
              <ButtonPimary type="submit">Send</ButtonPimary>
            </div>
          </form>
        </div>
        <div className="contact-map">
          <div className="map">
            <div className="info">
              <p>San Lorenzo, Paraguay</p>
            </div>
            <SimpleMap />
          </div>
        </div>
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
