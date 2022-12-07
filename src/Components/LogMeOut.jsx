import React from "react";

const LogMeOut = ({token, setToken}) => {

    return (
        <div className="logout-bar">
            <button type="logout" onSubmit={(()=>{
                try {
                    localStorage.removeItem(token);
                    setToken(null);
                } catch (error) {
                    console.error(error);
                }
            })}>Log Out</button>
        </div>
    );
};

export default LogMeOut