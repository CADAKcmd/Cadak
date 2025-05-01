import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full p-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-[#5237F9] text-lg text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400';

  return (
    <section id='contact' className="min-h-screen px-4 py-20 dark:bg-gray-900 bg-gray-100 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div className="space-y-6">
          <p className="text-[#5237F9] font-semibold uppercase tracking-wider">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Elevate your brand <br /> with Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Let’s bring your vision to life with clear and powerful design. Connect with me today!
          </p>
        </div>

        <form
          action='https://formsubmit.co/cadakcmd@gmail.com' 
          method='POST'
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className={inputClass}
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-3 bg-[#5237F9] text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group hover:gap-6"
          >
            Appointment Now
            <span className="transition-transform duration-300 transform group-hover:translate-x-2 font-bold">
              <ArrowRight />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
