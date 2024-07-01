import "../style.css";
import classNames from 'classnames';

const Header = ({className, icons, title, info}) => {
    const defaultClasses = 'flex flex-col bg-fa rounded-md gap-1 pl-6 pr-20 py-6';
    const combinedClasses = classNames(defaultClasses, className);

    return ( 
        <div>
            <div className={combinedClasses}>
                <div>{icons}</div>
                <h1 className="text-left">{title}</h1>
                <h1 className="text-2xl text-left font-medium">{info}</h1>
            </div> 
        </div>
     );
}
 
export default Header;
