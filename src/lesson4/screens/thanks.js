import React from 'react';
import '../i18n'
import { useTranslation } from 'react-i18next';

function Thanks() {
    const{t}=useTranslation(); 
    return (
        <h2> {t("thankYou")} </h2>
        // <div className="container mt-4">
        //     <h2>תודה על הצטרפותך לאתר שלנו!</h2>
        //     <p>נשמח לעמוד לשירותך בכל עת.</p>
        //     <a href="/" className="btn btn-secondary">חזרה לעמוד הראשי</a>
        // </div>
    );
}

export default Thanks;
