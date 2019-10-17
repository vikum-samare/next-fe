import React from "react"
import Link from "next/link"
import PropTYpes from "prop-types"

const CustomButton = React.forwardRef(({ onClick, href }, ref) => (
    <a href={href} onClick={onClick} ref={ref}>
        Click me
    </a>
))

CustomButton.propTypes = {
    href: PropTYpes.string,
    onClick: PropTYpes.func

}

// Todo: Finish layout


