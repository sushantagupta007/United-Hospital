import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Phone from '../../Image/Group 188.png';
const AppointmentForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://hospita-app.herokuapp.com/appointment', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    };

    return (
        <Container>
            <Container>
                <Row>
                    <Col xs={12} lg={5} className="py-5 px-3">
                        <h2 className='secondaryTextColor fw-bold fontFamilyYesava'>Book An Appointment </h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            placerat scelerisque tortor ornare ornare. Convallis felis vitae
                            tortor augue. Velit nascetur proin massa in. Consequat faucibus
                            porttitor enim et.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Row>
                                <Col lg={6} className='p-0 border-end'>
                                    <input
                                        className="colPadding border-0 text-white fontFamilyWork responsiveWidth responsiveBorder primaryBgColor"
                                        type="text"
                                        placeholder="Name" {...register("Name", { required: true, maxLength: 20 })}
                                    />
                                </Col>
                                <Col lg={6} className='p-0'>
                                    <select {...register("Department")} className="fontFamilyWork text-white inputPadding responsiveWidth primaryBgColor">
                                        <option className="text-black fontFamilyWork" value="" disabled>Department</option>
                                        <option className="text-black fontFamilyWork" value="female">Female</option>
                                        <option className="text-black fontFamilyWork" value="male">Male</option>
                                        <option className="text-black fontFamilyWork" value="other">Other</option>
                                    </select>
                                </Col>
                                <Col lg={6} className="p-0 border-end border-bottom">
                                    <input
                                        className="colPadding border-0 fontFamilyWork responsiveWidth primaryBgColor"
                                        type="email"
                                        placeholder="Email" {...register("Email", { required: true, maxLength: 20 })}
                                    />
                                </Col>
                                <Col lg={6} xs={12} className="p-0 border-end">
                                    <input
                                        className="border-0 border-bottom colPadding fontFamilyWork text-white responsiveWidth  primaryBgColor"
                                        type="text"
                                        placeholder="Phone" {...register("Phone", { required: true, maxLength: 20 })}
                                    />
                                </Col>
                                <Col lg={6} className="p-0 border-end">
                                    <input
                                        className="border-0 border-bottom colPaddingborder-0 colPadding fontFamilyWork responsiveWidth primaryBgColor "
                                        type="date"
                                        placeholder="Date" {...register("Date", { required: true, maxLength: 20 })}
                                    />
                                </Col>
                                <Col lg={6} className="p-0 border-end">
                                    <input
                                        className="border-0 border-bottom colPadding responsiveWidth primaryBgColor"
                                        type="time"
                                        placeholder="Time" {...register("Time", { required: true, maxLength: 20 })}
                                    />
                                </Col>

                                <Col lg={6} xs={12} className="p-0 border-end">
                                    <select {...register("Doctor")} placeholder="Doctor" className="border-0 border-bottom colPadding fontFamilyWork text-white responsiveWidth primaryBgColor">
                                        <option className="text-black fontFamilyWork" value="" disabled >Doctor</option>
                                        <option className="text-black fontFamilyWork" value="female">Female</option>
                                        <option className="text-black fontFamilyWork" value="male">Male</option>
                                        <option className="text-black fontFamilyWork" value="other">Other</option>
                                    </select>
                                </Col>
                                <Col lg={6} xs={12} className="p-0 border-end">
                                    <select {...register("Department")} placeholder="Department" className="border-0 border-bottom colPadding fontFamilyWork text-white responsiveWidth primaryBgColor">
                                        <option className="text-black fontFamilyWork" value="" disabled >Department</option>
                                        <option className="text-black fontFamilyWork" value="female">Female</option>
                                        <option className="text-black fontFamilyWork" value="male">Male</option>
                                        <option className="text-black fontFamilyWork" value="other">Other</option>
                                    </select>
                                </Col>
                                <Col lg={12} xs={12} className="p-0 border-end ">
                                    <textarea
                                        rows="5"
                                        placeholder="Message "
                                        className="fontFamilyWork p-2 responsiveWidth primaryBgColor border-bottom border-0 text-white"
                                        style={{ resize: 'none' }}
                                    >
                                    </textarea>
                                </Col>

                                <Col lg={12} xs={12} className="p-0 m-0">
                                    <input id="buttonHover" type="submit" className="tertiaryBgColor text-primary fw-bold border-0 responsiveWidth py-2 buttonMargin" />
                                </Col>
                            </Row>
                        </form>

                    </Col>
                    <Col xs={12} lg={6} className="py-5 px-4 ">
                        <Container className="primaryBgColor rounded p-3 ">
                            <h1 className="tertiaryTextColor fontFamilyYesava fw-bold  text-center"> Shcedule hours</h1>
                            <div className="">
                                <div className='w-75 mx-auto'>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Monday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Tuesday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Wednesday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Thursday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Friday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Saturday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Sunday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            Closed
                                        </Col>
                                    </Row>
                                </div>
                                <hr className='text-white' />
                            </div>
                            <div className="w-75 mx-auto">
                                <Row>
                                    <Col className="p-0 m-0 d-flex justify-content-end" >
                                        <img src={Phone} alt="Phone" />
                                    </Col>
                                    <Col className="p-0 m-0">
                                        <Row className="p-0 m-0">
                                            <p className="fontFamilyWork text-white p-0 m-0"> Emergency </p>
                                        </Row>
                                        <Row className="p-0 m-0">
                                            <p className="fontFamilyWork text-white p-0 m-0"> (237) 681-812-255</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default AppointmentForm;