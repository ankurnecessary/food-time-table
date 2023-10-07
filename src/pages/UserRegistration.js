const UserRegistration = () => {
    return (<div className="page">
        <h2>User Registration</h2>
        <form action="" method="post">
            <div className="form-group">
                <label htmlFor="first-name">First name:</label>
                <input type="text" id="first-name" name="first-name" autoComplete="true" required />
            </div>
            <div className="form-group">
                <label htmlFor="last-name">Last name:</label>
                <input type="text" id="last-name" name="last-name" autoComplete="true" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" autoComplete="true" required />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" autoComplete="true" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" required />
            </div>
            <button className="btn form-btn mb-small" type="submit">Register</button>
            <button className="btn form-btn" type="reset">Reset</button>
        </form>
    </div>);
}

export default UserRegistration;