export default function ContactComponent() {
  return (
    <section id="contact">
      <div className="content">
        <div class="contact-form">
          <h1>Contact me</h1>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum"
          </p>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message"></textarea>
          </form>
        </div>
        <div class="contact-map"></div>
      </div>
    </section>
  );
}
