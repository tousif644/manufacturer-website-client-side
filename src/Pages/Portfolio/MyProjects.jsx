import React from 'react';

const MyProjects = ({ title, description,webLink }) => {
    return (
        <div>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{title}</h2>
                        <p>{description}</p>
                        <div class="card-actions lg:justify-end">
                            <button class="btn btn-primary btn-xs text-white"><a href={webLink} target="_blank">Pay a visit</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;