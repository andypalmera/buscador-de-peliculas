import React from 'react';
import './NavItem.css';

const NavItem = props => {
    return (
        <li className="nav-item">
            <a href={props.datos.href} className="nav-link">
                <div className="nav-link-wrap">
                    <svg id="icon_popular" viewBox="0 0 30 30" width="100%" height="100%">
                        <title>Popular</title>
                        <path
                            d="M27.6684375,11.6432813 C28.2116602,11.1137695 28.4034375,10.3366406 28.1690625,9.61517578 C27.9346289,8.89371094 27.3226758,8.37779297 26.5719727,8.26875 L20.0077148,7.31490234 C19.8788672,7.29621094 19.7674805,7.21529297 19.7098242,7.09845703 L16.7742187,1.1503125 C16.4385352,0.470039062 15.7587305,0.0474609375 15.0001172,0.0474609375 C14.2415039,0.0474609375 13.5616992,0.470039062 13.2260156,1.1503125 L10.2904102,7.09851563 C10.2326953,7.21529297 10.1213672,7.29621094 9.99246094,7.31496094 L3.42832031,8.26875 C2.67761719,8.37779297 2.06572266,8.89371094 1.83123047,9.61517578 C1.59673828,10.3366406 1.78857422,11.1137695 2.33185547,11.6432813 L7.08175781,16.2733008 C7.17498047,16.3642383 7.21757812,16.4951953 7.19554687,16.6235742 L6.07423828,23.1612305 C5.94603516,23.9089453 6.24755859,24.650332 6.86126953,25.0962305 C7.47498047,25.5422461 8.27349609,25.5998438 8.94486328,25.2469336 L14.8160156,22.1602734 C14.9313281,22.0996289 15.0689648,22.0996289 15.1843359,22.1602734 L21.0555469,25.2469336 C21.3475781,25.4004492 21.6635742,25.4763281 21.9780469,25.4762695 C22.3864453,25.4762695 22.7922656,25.3483008 23.1389648,25.0961719 C23.7526758,24.6502148 24.0542578,23.9087695 23.9259961,23.1611719 L22.8046875,16.6235156 C22.7827148,16.4951367 22.8252539,16.3641797 22.9184766,16.2732422 L27.6684375,11.6432813 Z M21.2448633,16.8911719 L22.3661719,23.4289453 C22.4036719,23.6477344 22.2686133,23.7724805 22.2087891,23.8158984 C22.1489062,23.8592578 21.9884766,23.9493164 21.7920703,23.845957 L15.9208594,20.7592969 C15.6326367,20.607832 15.3164648,20.5320117 15.0002344,20.5320117 C14.6840039,20.5320117 14.3677734,20.607832 14.0796094,20.7592383 L8.20845703,23.8458398 C8.01193359,23.9491406 7.8515625,23.8591992 7.79173828,23.8157813 C7.73191406,23.7723633 7.59679688,23.6476172 7.63435547,23.4288281 L8.75566406,16.8911719 C8.86576172,16.2492773 8.653125,15.594668 8.18666016,15.1400391 L3.43675781,10.5100195 C3.27779297,10.3549805 3.31376953,10.1746875 3.33667969,10.104375 C3.35947266,10.0340039 3.43640625,9.86695313 3.65607422,9.83507813 L10.2201563,8.88123047 C10.8646289,8.78759766 11.4215625,8.38306641 11.7098437,7.79894531 L14.6454492,1.85074219 C14.7437109,1.65169922 14.9262891,1.63019531 15.000293,1.63019531 C15.0741797,1.63019531 15.2567578,1.65164063 15.3550781,1.85074219 L15.3550781,1.85080078 L18.2906836,7.79900391 C18.5789062,8.383125 19.1357813,8.78765625 19.7802539,8.88128906 L26.3444531,9.83513672 C26.5641211,9.86701172 26.6409961,10.0340625 26.6638477,10.1044336 C26.6866992,10.1748047 26.7227344,10.3551563 26.5637109,10.5100781 L21.8138086,15.1400977 C21.3474023,15.594668 21.1347656,16.2492773 21.2448633,16.8911719 Z M24.2450977,1.14990234 C24.5987109,1.40677734 24.6770508,1.90171875 24.4201758,2.25533203 L23.5801172,3.41150391 C23.4253125,3.62455078 23.1840234,3.73769531 22.9392773,3.73769531 C22.7780273,3.73769531 22.6153125,3.68853516 22.4747461,3.58652344 C22.1211328,3.32964844 22.042793,2.83470703 22.299668,2.48115234 L23.1397266,1.32498047 C23.3966016,0.971425781 23.8914258,0.893027344 24.2450977,1.14990234 Z M7.696875,2.47646484 C7.95380859,2.83007812 7.87541016,3.32501953 7.52185547,3.58183594 C7.38146484,3.68390625 7.21869141,3.73306641 7.05738281,3.73306641 C6.81257813,3.73306641 6.57128906,3.61998047 6.41642578,3.40675781 L5.57636719,2.25058594 C5.31949219,1.89703125 5.39789063,1.40208984 5.75144531,1.14521484 C6.10511719,0.888457031 6.6,0.966855469 6.85681641,1.32029297 L7.696875,2.47646484 Z M2.9034375,17.8024805 C3.03849609,18.2182031 2.81103516,18.6646289 2.39537109,18.7996875 L1.03617188,19.2413672 C0.954902344,19.267793 0.872460937,19.2803906 0.791425781,19.2803906 C0.457851563,19.2803906 0.147597656,19.0678125 0.0389648437,18.7333008 C-0.09609375,18.3176953 0.131308594,17.8711523 0.54703125,17.7360938 L1.90623047,17.2944141 C2.32195313,17.1593555 2.76837891,17.386875 2.9034375,17.8024805 Z M15.000293,26.5890234 C15.4374023,26.5890234 15.7916602,26.9432813 15.7916602,27.3803906 L15.7916602,28.8096094 C15.7916602,29.2466602 15.4373437,29.6009766 15.000293,29.6009766 C14.5632422,29.6009766 14.2089258,29.2466602 14.2089258,28.8096094 L14.2089258,27.3803906 C14.2089258,26.9433398 14.5632422,26.5890234 15.000293,26.5890234 Z M29.4529688,17.737207 C29.8686328,17.8722656 30.0960938,18.3186914 29.9610352,18.7343555 C29.8524023,19.0688086 29.5421484,19.2814453 29.2085156,19.2814453 C29.1274805,19.2814453 29.0450977,19.2689063 28.9638281,19.2425391 L27.6046289,18.8008594 C27.1889063,18.6658008 26.9615039,18.219375 27.0965625,17.8036523 C27.2316211,17.3879297 27.6782227,17.1605859 28.0937695,17.2955273 L29.4529688,17.737207 Z"
                            fill-rule="nonzero"
                        />
                    </svg>
                    <span>{props.datos.span}</span>
                </div>
            </a>
        </li>
    );
};

export default NavItem;