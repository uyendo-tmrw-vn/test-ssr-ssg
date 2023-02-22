import { motion } from "framer-motion"
import Image from 'next/legacy/image'

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { baseURL, handleError, ImageUrl } from '@components/Common';

import { useRouter } from 'next/router';
import { ApiUrl } from "@api/apiUrl";

import Heading from "@components/Heading";
import api from "@api/axiosServices";
// import Layout from "@components/Layout";
import AppContext from "@components/AppContext";
import MetaTag from "@components/MetaTag";

import Parser from 'html-react-parser';


const Contact = () => {

    const pageTitle = "Contact"
    const pageDes = "We are always eager to meet you and learn about what we can achieve for your business together.";

    const form = useForm({
        defaultValues: {
            countryOptions: "1",
            // name: 'test',
            // email: 'test@test.dd',
            // company: 'test',
            // message: 'test',
        },
        mode: "onChange"
    });

    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = form;
    const { isLoading, setLoading, resConfigData } = useContext(AppContext)

    const onSubmit = async (e) => {
        setLoading(true)

        const params = {
            name: e.name,
            email: e.email,
            company: e.company,
            message: e.message,
            country: e.countryOptions
        }
        try {
            await api.post(baseURL + ApiUrl.contact, params)
                .then(data => {
                    setLoading(false)
                    if (data.status === 200) {
                        if (data.data.data.id) {
                            router.push({ pathname: '/thank-you' });
                        }
                    }
                })
        } catch (error) {
            handleError(error)
            setLoading(false)
        }
    };

    return (
        <>
            <MetaTag
                title={pageTitle}
                description={pageDes}
                siteName={resConfigData?.site_name}
            />
            {/* <Layout> */}
                <div className="contact-page">
                    <Heading title="Contact Us" />
                    <div className="container">
                        {/* <video autoPlay muted loop>
                        <source src={'https://plankton.tokyo/wp/wp-content/uploads/2022/12/691811101.127480.mp4'} type="video/mp4" />
                    </video> */}
                        <div className="contact-page__container">
                            <div className="contact-page__left">
                                <p>{pageDes}</p>

                                <div className="address">
                                    {/* <h3 className="add-label">Address:</h3> */}
                                    <div className="add-1"><u>SINGAPORE</u>: {resConfigData && resConfigData.singapore_address && Parser(resConfigData.singapore_address)}</div>
                                    <div className="add-2"><u>CHINA</u>: {resConfigData && resConfigData.internation_address && Parser(resConfigData.internation_address)}</div>
                                </div>
                            </div>
                            <div className="contact-page__right">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-item">
                                        <input
                                            placeholder="Name"
                                            className="form-field"
                                            {...register("name", {
                                                required: true,
                                            })}
                                        />
                                        {errors?.name?.type === "required" && <small className="error-text">Name is required</small>}
                                    </div>
                                    <div className="form-item">
                                        <input
                                            placeholder="E-mail"
                                            className="form-field"
                                            {...register("email", {
                                                required: true,
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                },
                                            })}
                                        />
                                        {errors.email?.type === 'required' && <span className="error-text">E-mail is required</span>}
                                        {errors.email?.type === "pattern" && <span className="error-text">Please enter a valid email</span>}
                                    </div>
                                    <div className="form-item">
                                        <input
                                            placeholder="Company"
                                            className="form-field"
                                            {...register("company", { required: true })}
                                        />
                                        {errors.company && <span className="error-text">Company is required</span>}
                                    </div>
                                    <div className="form-item form-textarea">
                                        <textarea
                                            placeholder="Message"
                                            className="form-field"
                                            {...register("message", { required: true })}
                                        ></textarea>
                                        {errors.message?.type === 'required' && <span className="error-text">Message is required</span>}
                                    </div>
                                    <div className="form-item form-checkbox">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="countryOptions"
                                                value="1"
                                                id="inlineRadio1"
                                                {...register("countryOptions")}
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                Singapore
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="countryOptions"
                                                value="2"
                                                id="inlineRadio2"
                                                {...register("countryOptions")}
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio2">
                                                China
                                            </label>
                                        </div>
                                    </div>
                                    {errors.countryOptions?.type === 'required' && <span className="error-text">Please choose a country</span>}

                                    <div className="form-submit">
                                        <button
                                            data-gtm-category="Contactpage"
                                            data-gtm-action="Clicked_Contactpage_btn"
                                            data-gtm-label='Submit form'
                                            className="btn-gtm "
                                            type="submit">
                                            <span className="text">Send</span>
                                            <Image
                                                loading="lazy"
                                                width={60}
                                                height={30}
                                                objectFit="contain"
                                                alt="Send"
                                                src='/images/contact/contact-arrow.png' />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </Layout> */}
        </>
    )
}

export default Contact
