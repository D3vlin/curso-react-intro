import './TodoIcon.css'
import { ReactComponent as CheckSvg } from './check.svg';
import { ReactComponent as EditSvg } from './edit.svg';
import { ReactComponent as DeleteSvg } from './delete.svg';

const iconTypes = {
    "check": (color) => <CheckSvg className='Icon-svg' fill={color} />,
    "edit": (color) => <EditSvg className='Icon-svg' fill={color} />,
    "delete": (color) => <DeleteSvg className='Icon-svg' fill={color} />
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };