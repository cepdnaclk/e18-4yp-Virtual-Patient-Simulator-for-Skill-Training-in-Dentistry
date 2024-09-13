import React from 'react';

const SectionTitle = ({ Section }) => {
    return (
        <div className="phsect2" style={{ fontSize: "60px" }}>
            {Section === "complaint" && <div className="phsect2">History of the presenting complaint</div>}
            {Section === "habits" && <div className="phsect2">Habits</div>}
            {Section === "medicalH" && <div className="phsect2">Medical history</div>}
            {Section === "plaque" && <div className="phsect2">Plaque control</div>}
            {Section === "dhistory" && <div className="phsect2">Dietary history</div>}
            {Section === "pretreate" && <div className="phsect2">Previous dental treatments</div>}
            {Section === "shistory" && <div className="phsect2">Social history</div>}
        </div>
    );
};

export default SectionTitle;
