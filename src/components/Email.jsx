import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Email = ({ color, language }) => {
  
  const form = useRef();
  const goodAlert = language === 'fr' ? 'Votre mail a bien été envoyé 😊!' : 'Your email has been sent 😊!';
  const errorAlert = language === 'fr' ? 'Erreur : Veuillez réessayer.' : 'Error : Please retry';


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oywpknd',
        'template_is8v8re',
        form.current,
        'yMw26UKiqO6r8Cp7Y'
      )
      .then(
        (result) => {
          alert(goodAlert);
          e.target.reset();
        },
        (error) => {
          alert(errorAlert);
        }
      );
  };

  return (
    <>
    <h2 className="text-4xl font-bold">{language === "fr" ? "Me contacter" : "Contact me"}</h2>
    <div className='w-full flex justify-center'>
    <form style={{ backgroundColor: color + "22",
      color : color === '#FFD900' ? 'black' : 'white'

     }} className='w-full sm:w-2/3 p-5 rounded-xl shadow-sm flex flex-col justify-start gap-2' ref={form} onSubmit={sendEmail}>
      <div>
        <label className='block text-lg text-gray-700'>{language === "fr" ? "Nom :" : "Name :"}</label>
        <input className='focus:outline-none w-full p-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:border-blue-500 transition duration-300 ease-in-out' type="text" name="user_name" required />
      </div>
      <div>
        <label className=' block text-lg text-gray-700'>Email :</label>
        <input className='focus:outline-none w-full p-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:border-blue-500 transition duration-300 ease-in-out' type="email" name="user_email" required />
      </div>
      <div>
        <label className='block text-lg text-gray-700'>Message :</label>
        <textarea className='focus:outline-none w-full p-3 border border-gray-300 rounded-xl h-24 resize-y bg-white text-gray-700 focus:border-blue-500 transition duration-300 ease-in-out' name="message" required />
      </div>
      <button style={{ backgroundColor: color,
                        color : color === '#FFD900' ? 'black' : 'white'

       }} type="submit" className='w-full p-3 text-lg text-white rounded-xl cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-600 active:bg-indigo-900'>{language === "fr" ? "Envoyer" : "Send"}</button>
    </form>
    </div>
    </>
  );
};

export default Email;
