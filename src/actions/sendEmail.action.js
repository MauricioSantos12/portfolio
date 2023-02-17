import emailjs from '@emailjs/browser';

const apiKey = process.env.REACT_APP_API_KEY_PUBLIC;
const servideId = 'service_xf90ws5';
const templateId = 'template_b5egknk';
 
export const sendEmailValidationRequest = async (email, name, msg) => {
  try {
    const response = emailjs.send(servideId,templateId,{ to_name: name , from_name:email, message: msg, }, apiKey );
        return response;
  } catch (error) {
    console.log({error});
      throw error;
  }
}