import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.warn('EmailJS Public Key not found. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your environment variables.');
  }
};

// Send enquiry form email
export const sendEnquiryEmail = async (formData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_ENQUIRY || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ENQUIRY || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS service ID or template ID not configured for enquiry form');
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email || 'Not provided',
    phone: formData.phone,
    city: formData.city || 'Not provided',
    message: formData.message || 'No message provided',
    to_name: 'Herald EV Team',
  };

  return emailjs.send(serviceId, templateId, templateParams);
};

// Send service booking email
export const sendServiceEmail = async (formData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_SERVICE || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SERVICE || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS service ID or template ID not configured for service form');
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email || 'Not provided',
    phone: formData.phone,
    vehicle_model: formData.vehicleModel || 'Not provided',
    service_type: formData.serviceType || 'Not specified',
    preferred_date: formData.preferredDate || 'Not specified',
    comments: formData.comments || 'No additional comments',
    to_name: 'Herald EV Service Team',
  };

  return emailjs.send(serviceId, templateId, templateParams);
};

// Send sub-dealer application email
export const sendSubDealerEmail = async (formData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_SUBDEALER || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SUBDEALER || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS service ID or template ID not configured for sub-dealer form');
  }

  const templateParams = {
    from_name: formData.name,
    business_name: formData.businessName || 'Not provided',
    from_email: formData.email || 'Not provided',
    phone: formData.phone,
    city: formData.city || 'Not provided',
    experience: formData.experience || 'Not specified',
    message: formData.message || 'No message provided',
    to_name: 'Herald EV Business Development Team',
  };

  return emailjs.send(serviceId, templateId, templateParams);
};
