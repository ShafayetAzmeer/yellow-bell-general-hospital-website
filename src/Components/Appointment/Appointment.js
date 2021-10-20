import React from 'react';
import AppointmentItems from '../AppointmentItems/AppointmentItems';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="mb-5 mt-5 appointmentStyle pt-5 pb-5" id="appointment">
                <h1 className="fs-1 fw-bold mb-5">Find Your Doctor</h1>
                <AppointmentItems></AppointmentItems>
            </div>
    );
};

export default Appointment;