/* eslint-disable react/prop-types */
import classNames from "classnames"
import { createElement } from "react"
import PropTypes from "prop-types"

export default function Button( {size, children }) {

    return createElement ( 'button',{
        className: classNames("bg-black text-white p-2 rounded-full cursor-pointer", {
            
            "bg-blue-500 text-white p-2 h-[40px] w-[100px] rounded-md": size === 'small',
            "bg-pink-500 text-white p-2 h-[50px] w-[150px] rounded-lg": size === 'medium',
            "bg-red-500 text-white p-2 h-[60px] w-[200px] rounded-xl": size === 'large',
        })
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}
Button.defaultProps = {
    size: 'medium'
}