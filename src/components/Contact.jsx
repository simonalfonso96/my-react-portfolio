import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <GrMapLocation size={25} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Bulacan, Philippines</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <MdOutlineMail size={30} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:simonalfonso96@gmail.com">
                    simonalfonso96@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
