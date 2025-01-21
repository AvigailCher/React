import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Thanks from './thanks';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const navigate = useNavigate(); // יצירת הפונקציה navigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // פונקציה שתפעל כאשר הכפתור יילחץ ותנווט לעמוד התודה
    const handleClick = () => {
        // אפשר להוסיף טיפול בנתוני הטופס אם צריך
        console.log('טופס נשלח:', formData);

        // ניווט לעמוד התודה
        navigate('/thanks');
    };

    return (
        <div className="container mt-4">
            <h2>צור קשר</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">שם</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="הכנס את שמך"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">אימייל</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="הכנס את כתובת האימייל שלך"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">הודעה</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="כתוב את ההודעה שלך כאן"
                        rows="4"
                        required
                    />
                </div>
                {/* הכפתור מפעיל את הפונקציה handleClick עם onClick */}
                <button type="button" className="btn btn-primary" onClick={handleClick}>שלח</button>
            </form>
        </div>
    );
}

export default Contact;
