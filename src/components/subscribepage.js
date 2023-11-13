import React, { useState } from "react";
import bgmobile from "../images/illustration-sign-up-mobile.svg";
import bgdekstotp from "../images/illustration-sign-up-desktop.svg";
import checklist from "../images/icon-list.svg";

const detailList = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function Subscribepage({ openmodal }) {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);

    const onInputChange = data => {
        setEmail(data.target.value);
        validateInput(data);
        localStorage.setItem('email', data.target.value);
    }

    const resetChange = data => {
        setEmail('');
        setIsValid(false);
    }

    const validateInput = e => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let { value } = e.target;

        if (value.match(emailRegex)) {
            setIsValid(true);
            setError('');
        } else if (value === '') {
            setIsValid(false);
            setError('');
        } else {
            setIsValid(false);
            setError('Valid email required');
        }
    }

  return (
    <div className="sm:bg-secondary-charcoal sm:flex justify-center min-h-screen font-roboto">
      <div className="bg-white sm:grid sm:grid-cols-2 flex flex-col my-auto sm:rounded-3xl max-w-3xl">

        <img
          src={bgmobile}
          alt="background-orange"
          className="sm:hidden w-full"
        />

        <div className="mx-7 space-y-5 my-11 sm:ml-10 sm:mx-4 sm:my-auto">
          <div className="text-4xl font-bold">Stay updated!</div>
          <div>Join 60,000+ product managers receiving monthly updates on:</div>
          <div className="space-y-2">
            {detailList.map((detail, index) => (
              <div key={index} className="flex items-start space-x-5">
                <img src={checklist} alt="checklist" />
                <div>{detail}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Email address</span>
                {error && <span className="text-primary text-sm">{error}</span>}
            </div>
            <input
              type="email"
              className={` ${error ? 'focus:border-primary focus:ring-primary' : 'focus:border-secondary-grey focus:ring-secondary-grey '} mt-1 block w-full rounded-md border-secondary-grey focus:ring shadow-sm focus:ring-opacity-50`}
              placeholder="email@company.com" value={email} onChange={onInputChange} onBlur={validateInput}
            />
          </div>
          <button onClick={() => {openmodal(); resetChange()}} className="p-3 w-full default-action" disabled={!isValid} >Subscribe to monthly newsletter</button>
        </div>

        <div>
          <img
            src={bgdekstotp}
            alt="background-orange"
            className="hidden sm:block p-5"
          />
        </div>

      </div>
    </div>
  );
}

export default Subscribepage;
