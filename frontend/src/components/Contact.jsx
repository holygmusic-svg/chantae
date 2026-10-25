import { useState } from "react";
import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const fieldCls =
  "w-full bg-transparent border-0 border-b border-[#A9967A]/50 focus:border-[#1C1E1B] focus:outline-none focus:ring-0 rounded-none px-0 py-4 font-light text-base md:text-lg placeholder:text-[#5C5F5A]/60 transition-colors duration-300";

// Construct contact destinations only after a visitor interacts.
// This deters basic email/phone scrapers; it cannot stop sophisticated bots.
const bookingEmail = () => String.fromCharCode(98, 111, 111, 107, 105, 110, 103, 64, 67, 104, 97, 110, 116, 97, 101, 46, 109, 101);
const bookingPhone = () => String.fromCharCode(43, 49, 55, 56, 54, 56, 49, 54, 56, 49, 52, 56);

const contactButtonClass =
  "label-ed inline-flex items-center justify-center rounded-full border border-[#1C1E1B] px-6 py-3 text-[#1C1E1B] hover:bg-[#1C1E1B] hover:text-[#F9F6F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry_type: "booking",
    message: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Chantae Sierra — ${form.inquiry_type} enquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Enquiry type: ${form.inquiry_type}`,
      "",
      form.message,
    ].join("\n");

    // Open a prefilled email draft rather than storing messages without email delivery.
    window.location.href = `mailto:${bookingEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-32 md:py-48"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <span className="label-ed text-[#A9967A] flex items-center gap-3">
              <FloraMark className="w-4 h-4" /> Booking &amp; Enquiries
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif-ed font-light text-4xl md:text-6xl leading-[1.05] tracking-tight mt-8">
              Let's make something{" "}
              <em className="italic text-[#A9967A]">timeless</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <p className="text-base md:text-lg font-light leading-relaxed text-[#5C5F5A] max-w-md">
              For campaigns, editorials and creative collaborations, write
              directly — every enquiry is read personally and lands straight in
              the studio inbox.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                data-testid="contact-email-button"
                aria-label="Email Chantae Sierra booking"
                onClick={() => { window.location.href = `mailto:${bookingEmail()}`; }}
                className={contactButtonClass}
              >
                Email Booking
              </button>
              <button
                type="button"
                data-testid="contact-phone-button"
                aria-label="Call Chantae Sierra booking"
                onClick={() => { window.location.href = `tel:${bookingPhone()}`; }}
                className={contactButtonClass}
              >
                Call Booking
              </button>
            </div>
            <p className="mt-3 text-xs text-[#5C5F5A]">
              Choose an option to open your email or calling app.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <form onSubmit={submit} data-testid="contact-form" className="space-y-10">
              <div>
                <label htmlFor="contact-name" className="label-ed text-[#5C5F5A]">
                  Name
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-name-input"
                  type="text"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  className={fieldCls}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="label-ed text-[#5C5F5A]">
                  Email
                </label>
                <input
                  id="contact-email"
                  data-testid="contact-email-input"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@studio.com"
                  className={fieldCls}
                />
              </div>
              <div>
                <label htmlFor="contact-type" className="label-ed text-[#5C5F5A]">
                  Enquiry type
                </label>
                <select
                  id="contact-type"
                  data-testid="contact-type-select"
                  value={form.inquiry_type}
                  onChange={set("inquiry_type")}
                  className={`${fieldCls} cursor-pointer appearance-none`}
                >
                  <option value="booking">Booking — Campaign / Editorial</option>
                  <option value="runway">Runway &amp; Presentation</option>
                  <option value="collaboration">Creative Collaboration</option>
                  <option value="press">Press &amp; Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="label-ed text-[#5C5F5A]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  data-testid="contact-message-input"
                  required
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about the project, dates and location…"
                  className={`${fieldCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                data-testid="contact-submit-button"
                className="label-ed border border-[#1C1E1B] px-10 py-4 rounded-full hover:bg-[#1C1E1B] hover:text-[#F9F6F0] transition-colors duration-300"
              >
                Send enquiry
              </button>
              <p className="text-xs text-[#5C5F5A]">Opens your email app with the enquiry prefilled; press Send there.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
