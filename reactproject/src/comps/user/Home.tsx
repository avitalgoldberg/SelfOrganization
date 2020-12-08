import React, { useState } from 'react'
import './Home.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Message from '../../interfaces/Message';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} id="alert" />;
}

export default function Home() {

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('')

    const handleClick = () => {
        let msg: Message = {
            //localStorage.getItem('email');
            email: 'aa@ff.ff',
            mess: message,
            role: 'user'
        }
        //axios
        //לעדכן בשרת
        console.log(msg)
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <div>
            <div className="all" >
                <Alert severity="info" >
                    <p>האתר נמצא כרגע בשלבי הרצה<br></br>
                עד שיהיו בו מספיק נותני שירות לאירועים.<br></br>
                נשמח לקבל ממכם הערות והארות:)<br></br>
            תודה!
            </p>
                </Alert>
                <br></br><br></br><br></br>
                <li className="txt"><a className="txthref" href="#home1">על האתר</a><br></br></li>
                <li className="txt"><a className="txthref" href="#home2">מה ניתן לעשות באתר</a><br></br></li>
                <li className="txt"><a className="txthref" href="#home3">ליצירת קשר</a><br></br><br></br><br></br></li>
                <div className="home" id='home1'>
                    <b className="txt">על האתר</b><br></br>
                    <p>אתר זה הוקם על מנת לסייע לאנשים לארגן את הארוע שלהם בצורה הנוחה ביותר.<br></br>
                    האתר עובר סינון קפדני ומתאים לאנשים מהציבור החרדי והדתי.<br></br>
                    הוא מרכז את כל בעלי המקצוע השונים מחולקים על פי קטגוריות,<br></br>ומאפשר לסנן
                    ביניהם, לקבוע תאריך בו כולם פנויים,<br></br>ועוד אופציות נוספות המקלות על ארגון הארוע.
                </p>
                </div>
                <div className="home" id='home2'>
                    <b className="txt">מה ניתן לעשות באתר</b>
                    <br></br><br></br>
                    <li>באתר ניתן לראות את כל בעלי המקצוע השונים מחולקים על פי קטגוריות.
                    כאשר כל קטגוריה ניתן לסנן על פי מאפיינים משלה כגון: מחיר, מיקום, גודל וכו'.
                </li>
                    <li>האתר מאפשר בחירת תאריך בו כל נותני השירות שנבחרו פנויים.
                    (התאריכים הפנויים צבועים בצבע הקטגוריה)
                </li>
                    <li>האתר מאפשר להזין נתונים ומסקנות מהארוע ומההתארגנות אליו
                    על מנת לעזור לכם בפעם הבאה שתארגנו.
                    </li>
                    <li>ניתן לארגן באתר את רשימת המוזמנים שלכם ולשמור את הנתונים לאירועים הבאים שלכם. </li>
                    <li >האתר מאפשר לכם לסדר את רשימות הקניות שלכם לקראת הארוע
                    מחולקים על פי קטגוריות
                    תוך מעקב כמה אחוזים כבר קניתם.
                </li>
                </div>
                <div className="home" id='home3'>
                    <b className="txt">ליצירת קשר</b><br></br><br></br>
                    <TextField
                        id="outlined-multiline-static"
                        label="למנהל האתר"
                        multiline
                        rows={8}
                        placeholder="כתוב כאן את הודעתך:"
                        variant="outlined"
                        style={{ width: '60%' }}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div></div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    הודעתך ניקלטה בהצלחה!
        </Alert>
            </Snackbar>
            <Button
                onClick={handleClick}
                // onClick={() => setStatus('active')}
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#032f5c" }}
                endIcon={<SendIcon fontSize="small" />}
            >
                שלח
      </Button>
        </div>

    )

}
