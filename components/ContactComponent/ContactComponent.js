import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ButtonPimary from "../ButtonPrimary/ButtonPimary";
import SimpleMap from "../Maps/SimpleMap";
import { sendEmailApi } from "../../api/emailApi";
import { getContactContent } from "../../api/contactApi";

export default function ContactComponent() {
  const router = useRouter();
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const content = getContactContent(router.locale || "es");
    setPageContent(content);
  }, []);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      try {
        toast.info(pageContent.wait);

        const result = await sendEmailApi(formData);

        if (result.status !== 200 && result.status !== 201) {
          toast.error(pageContent.errorSend);
          return;
        }

        toast.success(pageContent.messageSeneded);

        formik.resetForm();
      } catch (error) {
        toast.error(pageContent.errorSend);
      }
    },
  });

  return (
    <section id="contact">
      <div className="content">
        <div className="contact-form">
          <h1>{pageContent.title}</h1>
          <p>{pageContent.comment}</p>
          <form onSubmit={formik.handleSubmit}>
            <input
              className={formik.errors.name ? "has-error" : ""}
              autoComplete="new_name"
              type="text"
              name="name"
              placeholder={pageContent.name}
              value={formik.values.name}
              onChange={formik.handleChange}
            />

            <input
              className={formik.errors.email ? "has-error" : ""}
              autoComplete="off"
              type="email"
              name="email"
              placeholder={pageContent.email}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <input
              className={formik.errors.subject ? "has-error" : ""}
              autoComplete="off"
              type="text"
              name="subject"
              placeholder={pageContent.subject}
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
            <textarea
              className={formik.errors.message ? "has-error" : ""}
              name="message"
              placeholder={pageContent.message}
              value={formik.values.message}
              onChange={formik.handleChange}
            ></textarea>
            <div className="actions">
              <ButtonPimary type="submit">{pageContent.send}</ButtonPimary>
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
