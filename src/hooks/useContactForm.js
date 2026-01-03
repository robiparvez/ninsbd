import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from 'src/components/user/Data';

/**
 * Custom hook for handling contact form logic
 * @returns {Object} Form handling methods and state
 */
export const useContactForm = () => {
    const formRef = useRef();
    const buttonRef = useRef();
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async () => {
        setIsSubmitting(true);

        if (buttonRef.current) {
            buttonRef.current.disabled = true;
        }

        try {
            const { serviceId, templateId, userId } = emailJsConfig;
            await emailjs.sendForm(serviceId, templateId, formRef.current, userId);

            setDone(true);

            setTimeout(() => {
                const thanksText = document.getElementById('thanks-text');
                if (thanksText) {
                    thanksText.style.display = 'none';
                }
                setDone(false);
            }, 5000);

            reset();
        } catch (error) {
            console.error(error.text);
            alert('Sorry, there was an error sending your message. Please try again later or contact us directly.');
        } finally {
            setIsSubmitting(false);
            if (buttonRef.current) {
                buttonRef.current.disabled = false;
            }
        }
    };

    return {
        formRef,
        buttonRef,
        done,
        isSubmitting,
        register,
        errors,
        handleSubmit: handleSubmit(onSubmit)
    };
};
