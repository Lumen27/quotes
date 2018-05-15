import React from "react"
import PropTypes from "prop-types"

export const Quote = props => {
    return (
        <div>
            <div className="rQuote">
                {props.quote}
            </div>
            <div className="rAuthor">
                {props.author}
            </div>
        </div>
    )
};

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};
