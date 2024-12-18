import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to connect with me on any of the platforms below.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:santiago.jimenez.casas@gmail.com"
            className="text-gray-700 hover:text-indigo-500 text-3xl transition"
            aria-label="Email"
            target="_blank"
            rel="noreferrer"
          >
            <Email fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/jimenezsantiago/"
            className="text-gray-700 hover:text-indigo-500 text-3xl transition"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a
            href="https://github.com/Santin203"
            className="text-gray-700 hover:text-indigo-500 text-3xl transition"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub fontSize="large" />
          </a>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-medium text-gray-800">Santiago Jiménez</h3>
          <p className="text-gray-600">Computer Science Student</p>
          <p className="text-gray-600">Heredia, Costa Rica</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
