import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async(data) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        console.log("submitting form", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <Fade direction='up' triggerOnce>
                <div className="mb-4 w-full ">
                    <input
                        {...register(
                            "name",
                            {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            }
                        )}
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 dark:bg-gray-800 text-slate-900 dark:text-slate-100 border border-gray-500 rounded"
                    />
                    {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <input
                        {...register(
                            'email',
                            {
                                required: {
                                    value: true,
                                    message: "email is required"

                                },
                                pattern: {
                                    value: /^[a-z0-9._-]+@[a-z.-]+.[a-z]{2,}$/,
                                    message: "Invalid email"
                                }
                            }
                        )}
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 dark:bg-gray-800 text-slate-900 dark:text-slate-100 border border-gray-500 rounded"
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <input
                        {...register(
                            'subject',
                            {
                                required: {
                                    value: true,
                                    message: "Subject is required"
                                }
                            }
                        )}
                        type="text"
                        placeholder="Subject"
                        className="w-full p-3 dark:bg-gray-800 text-slate-900 dark:text-slate-100 border border-gray-500 rounded"
                    />
                    {errors.subject && <p className='text-red-500 text-sm'>{errors.subject.message}</p>}
                </div>
                <div className="mb-4">
                    <textarea
                        {...register(
                            'message',
                            {
                                required: {
                                    value: true,
                                    message: "Message is required"
                                }
                            }
                        )}
                        placeholder="Message"
                        className="w-full p-3 dark:bg-gray-800 text-slate-900 dark:text-slate-100 border border-gray-500 rounded outline-none" rows="4" ></textarea>
                    {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
                </div>
                <div className="text-center">
                    <input
                        type='submit'
                        disabled={isSubmitting}
                        value={isSubmitting ? 'Sending' : 'Send Message'}
                        className="w-full p-3 font-bold bg-slate-900 dark:bg-slate-300 text-white dark:text-black rounded cursor-pointer"
                    />
                </div>
            </Fade>
        </form>
    )
}

export default ContactForm;