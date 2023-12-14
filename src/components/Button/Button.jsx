/* eslint-disable react/prop-types */
import classNames from "classnames"
import { createElement } from "react"
import PropTypes from "prop-types"

export default function Button( {size, children }) {

    return createElement ( 'button',{
        className: classNames("bg-black text-white p-2 rounded-full", {
            
            "bg-blue-500 text-white p-2 rounded-md": size === 'small',
            "bg-pink-500 text-white p-2 rounded-lg": size === 'medium',
            "bg-red-500 text-white p-2 rounded-xl": size === 'large',
        })
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}
Button.defaultProps = {
    size: 'medium'
}