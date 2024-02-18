

function Login() {


    return (
        <>
            <div className="card p-5" style={{width:'450px',height:'auto'}}>
                <form>
                    <div className="form-floating  mt-3" align-content-xl-center >
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email or phone number</label>
                    </div>
                    <div className="form-floating  mt-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2  mt-3" type="submit">Login</button>
                    <p><a href="#" class="link-primary">Forget password?</a></p>
                    <hr />
                    <div className="d-flex justify-content-center">
                    <button className="w-50 btn btn-success py-2" type="submit">Create new account</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Login;