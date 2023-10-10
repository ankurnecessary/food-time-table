import { useForm } from 'react-hook-form';

const UserRegistration = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({ mode: 'onTouched' });
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (<div className="page">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="first-name">First name <i className='text-alert'>*</i></label>
                <input id='first-name' type="text" autoComplete="true"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    {...register("firstName"
                        , {
                            required: "First name is required"
                            , maxLength: {
                                value: 50,
                                message: 'At max 50 characters are allowed'
                            }
                        })} />
                <p className='text-alert'>{errors.firstName?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="last-name">Last name <i className='text-alert'>*</i></label>
                <input id='last-name' type="text" autoComplete="true"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    {...register("lastName"
                        , {
                            required: "Last name is required"
                            , maxLength: {
                                value: 50,
                                message: 'At max 50 characters are allowed'
                            }
                        })} />
                <p className='text-alert'>{errors.lastName?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email <i className='text-alert'>*</i></label>
                <input id='email' type="email" autoComplete="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email"
                        , {
                            required: "Email is required"
                            , pattern: {
                                value: /^\S+@\S+$/i
                                , message: 'Please mention a valid email address'
                            }
                        })} />
                <p className='text-alert'>{errors.email?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username <i className='text-alert'>*</i></label>
                <input id='username' type="text" autoComplete="true"
                    aria-invalid={errors.username ? "true" : "false"}
                    {...register("username"
                        , {
                            required: "Username is required"
                            , maxLength: {
                                value: 12
                                , message: 'At max 12 characters are allowed'
                            }
                        })} />
                <p className='text-alert'>{errors.username?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password <i className='text-alert'>*</i></label>
                <input id='password' type="password" autoComplete="true"
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register("password"
                        , {
                            required: "Password is required"
                            , minLength: {
                                value: 8
                                , message: 'Password should have at least 8 characters'
                            }
                            , maxLength: {
                                value: 20
                                , message: 'Password cannot exceed 20 characters'
                            }
                        })} />
                <p className='text-alert'>{errors.password?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password <i className='text-alert'>*</i></label>
                <input id='confirm-password' type="password" autoComplete="true"
                    {...register("confirm-password"
                        , {
                            required: "Confirm password is required"
                            , validate: {
                                matchPassword: (value) => {
                                    if (watch('password') !== value) {
                                        return "Confirm password doesn't match with password"
                                    }
                                }
                            }
                        },)} />
                <p className='text-alert'>{errors['confirm-password']?.message}</p>
            </div>
            <button className="btn form-btn mb-small" type="submit">Register</button>
            <button className="btn form-btn" type="reset">Reset</button>
        </form>
    </div>);
}

export default UserRegistration;