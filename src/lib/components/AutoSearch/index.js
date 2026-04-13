import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import useDebouncedQuery from '../../hooks/useDebouncedQuery';


const AutoSearch = ({ options, renderItems, 
    onSearch, defaultValue, searchUrl, ...restProps }) => {

    const [inputValue, setInputValue] = useState(defaultValue);
    const isControlled = onSearch !== undefined;
    const [unControlledOptions, setUnControlledOptions] = useState([]);
    const debouncedQuery = useDebouncedQuery(inputValue, 500);
    const fetchOptions = async (query) => {
        const response = await fetch(`${searchUrl}?query=${query}`);
        const data = await response.json();
        setUnControlledOptions(data);
    };

    const onChange = (e) => {
        setInputValue(e.target.value)
    };
    
    useEffect(() => {
        if (isControlled) {
            onSearch(debouncedQuery);
        } else {
            fetchOptions(debouncedQuery);
        }
    }, [debouncedQuery]);

    const renderOptions = (item) => {
        return <div key={item.value}>{option.label}</div>;
    }
    return (
        <div className="auto-search-container">
            <input type="text" value={inputValue} onChange={onChange} {...props} />
            {isControlled ? options.map(renderItems) : unControlledOptions.map(renderOptions)}
        </div>
    );
};

AutoSearch.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default AutoSearch;