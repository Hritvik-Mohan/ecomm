import './Register.css'

export default function Register() {
  return (
    <div className='register-form'>
        <h3>Register</h3>
        <form action="">
            <div className="mb-3">
                <label htmlFor='' className='form-label'>Email</label>
                <input className='form-control' type='email'/>
            </div>
            <div className="mb-3">
                <label htmlFor='' className='form-label'>First Name</label>
                <input className='form-control' type='text'/>
            </div>
            <div className="mb-3">
                <label htmlFor='' className='form-label'>Last Name</label>
                <input className='form-control' type='text'/>
            </div>
            <div className="mb-3">
                <label htmlFor='' className='form-label'>User Name</label>
                <input className='form-control' type='text'/>
            </div>
            <div className="mb-3">
                <label htmlFor='' className='form-label'>Phone</label>
                <input className='form-control' type='number'/>
            </div>
            <div className="mb-3">
                <label htmlFor='' className='form-label'>Password</label>
                <input className='form-control' type='password'/>
            </div>
            <h4>Address</h4>
            <div className="row">
                <div className="mb-3 col-6">
                    <input placeholder='City' className='form-control' type='text'/>
                </div>
                <div className="mb-3 col-6">
                    <input placeholder='Street' className='form-control' type='text'/>
                </div>
                <div className="mb-3 col-6">
                    <input placeholder='Flat No' className='form-control' type='text'/>
                </div>
                <div className="mb-3 col-6">
                    <input placeholder='Pin Code' className='form-control' type='text'/>
                </div>
            </div>
            <button type='submit' className='btn btn-primary float-end'>Register</button>
        </form>
    </div>
  )
}
