import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-search">
                <form onSubmit={props.getInfo} className="header-search-form">
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        className="header-search-input"
                        name="searchValue"
                        value={props.value}
                        autoComplete="off"
                        onChange={(e) => props.onChangeName(e)}
                    />
                    <svg id="iconSearch" viewBox="0 0 30 30" width="100%" height="100%">
                        <title>Search</title>
                        <path
                            d="M21.9140625,18.28125 C23.0859375,16.4375 23.7734375,14.25 23.7734375,11.8984375 C23.7734375,5.328125 18.453125,0 11.890625,0 C5.3203125,0 0,5.328125 0,11.8984375 C0,18.46875 5.3203125,23.796875 11.8828125,23.796875 C14.265625,23.796875 16.484375,23.09375 18.34375,21.890625 L18.8828125,21.515625 L27.3671875,30 L30,27.3203125 L21.5234375,18.8359375 L21.9140625,18.28125 Z M18.546875,5.25 C20.3203125,7.0234375 21.296875,9.3828125 21.296875,11.890625 C21.296875,14.3984375 20.3203125,16.7578125 18.546875,18.53125 C16.7734375,20.3046875 14.4140625,21.28125 11.90625,21.28125 C9.3984375,21.28125 7.0390625,20.3046875 5.265625,18.53125 C3.4921875,16.7578125 2.515625,14.3984375 2.515625,11.890625 C2.515625,9.3828125 3.4921875,7.0234375 5.265625,5.25 C7.0390625,3.4765625 9.3984375,2.5 11.90625,2.5 C14.4140625,2.5 16.7734375,3.4765625 18.546875,5.25 Z"
                            stroke="none"
                            fillRule="nonzero"
                        />
                    </svg>
                </form>
            </div>
        </div>
    );
};

export default Header;
