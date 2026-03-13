import React from 'react';

const MentionsLegales = ({ title }) => {
    return (
        <div className="container py-5 text-center" style={{ minHeight: '50vh' }}>
            <h1 className="text-primary mb-4">{title}</h1>
            <p className="fs-4 text-secondary">
                Cette page sera prochainement remplie par un cabinet spécialisé.
            </p>
        </div>
    );
};

export default MentionsLegales;