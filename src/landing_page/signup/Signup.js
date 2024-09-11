function Signup() {
    return ( 
            <div className="container mt-5">
            <div style={{height:"100px"}}></div>
                <div className="row mt-5">
                    
                    <div className="col-6 mt-5">
                        <img src="media/images/signup.png"></img>
                    </div>
                    
                    <div className="col-6 mt-5 pl-5">
                        <h1>Signup now</h1>
                        <h4 className="text-muted mt-5"> Or track your existing application.</h4>
                        <p className="text-muted mt-6">Enter mobile number:</p>
                        <input type="number mt-5"></input>
                        <p className="text-muted">You will receive an OTP on your number</p>
                        <button type="button" class="btn btn-primary">Continue</button>
                        <a href="#">Want to open an NRI account?</a>
                    </div>
                    <p className="text-center mt-5">I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
                    <p className="text-center">If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
                </div>
            </div>
        
     );
}

export default Signup;