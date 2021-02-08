import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg'
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
const Input = ({ title, type, formikData, error }) => {


    const name = <UserIcon width={16} height={16} />
    const email = <MailIcon width={16} height={16} />
    const password = <PasswordIcon width={16} height={16} />


    return (
        <div>
            <div className={`input__container ${error && 'input__container--error'}`}>
                <div className='input__icon'>
                <MailIcon width={16} height={16} />
                </div>
                <input type={type} className='input__field' placeholder={title} {...formikData}></input>
            </div>
            <div className={`input__error ${error && 'input__error--active'}`}>{error}</div>
        </div>

    )
}
Input.propTypes = {
    title: PropTypes.oneOf(['name', 'password', 'email']),
    type: PropTypes.string.isRequired,
    formikData: PropTypes.object.isRequired,
    error: PropTypes.string,
}

export default Input
