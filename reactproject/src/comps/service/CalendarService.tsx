import React from 'react'
import CallendarService from './CallendarService'
import './CalendarService.css'

export default function CalendarService() {
    return (
        <div className="parent">
            <div className="div2">
                <p id="explanation">בלוח זה עלייך לסמן את התאריכים התפוסים שלך
                בעת לחיצה על תאריך אתה מסמן אותו כתפוס ובלחיצה חוזרת כפנוי.
                ובעת לחיצה על יום מסויים אתה מסמן יום זה כיום שתמיד תפוס.
                שים לב: עלייך לסמן גם ימים בהם אתה לא עובד כימים תפוסים (כגון שבתות וחגים).
                </p>
            </div>
            <div className="div1">
                <CallendarService />
            </div></div>
    )
}