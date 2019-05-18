import React from 'react';

function filterIcon ({className}) {
	return (
		<svg className={className} width="39" height="39" viewBox="0 0 39 39">
		    <g fill="none" fill-rule="evenodd">
		        <path fill="#62AA14" d="M32.814 8.83c-.209-.478-.57-.717-1.086-.717H8.195c-.514 0-.876.24-1.084.717-.209.503-.123.932.257 1.287l9.064 9.064v8.935c0 .32.117.595.35.828l4.706 4.706c.22.233.497.35.827.35.148 0 .3-.03.46-.092.478-.209.717-.57.717-1.085V19.181l9.064-9.064c.38-.355.466-.784.258-1.287z"/>
		        <rect width="37" height="37" x="1" y="1" stroke="#62AA14" stroke-width="2" rx="6"/>
		    </g>
		</svg>
	)
}

export default filterIcon;
