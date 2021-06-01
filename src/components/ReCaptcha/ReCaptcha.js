import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptcha({ setIAmHuman, recaptchaRef }) {

	const onChange = (value) => {
		setIAmHuman(value)
	}
	return (
		<ReCAPTCHA 
			ref={recaptchaRef}
			sitekey="6Ldx2doaAAAAACcR8lDx94GJ5MbILOUKJGrIYzJT"
			onChange={onChange}
		/>
	)
}