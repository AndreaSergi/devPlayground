import './Footer.css'
import { SiGithub } from 'react-icons/si';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export function Footer() {
    return (
        <footer className="footer">

            <div className='footer-upper'>

                {/* <img className='footer-logo' width='3' src="src\Footer\footer_media\as.png" /> */}

                {/* Logo - Opzione 1 */}
                <img className='footer-logo' width='3' src="src\Footer\footer_media\opzione1_Kapsalon_Brush.png" />

                {/* Logo - Opzione 2 */}
                {/* <img className='footer-logo' width='3' src="src\Footer\footer_media\opzione2_Sensa_Brush.png" /> */}

                <div className="footer-left">
                    {/* <BrowserRouter>
                        
                            <Link className='footer-links' to="/">Home</Link>
                            <Link className='footer-links' to="/">About</Link>
                            <Link className='footer-links' to="/">Games</Link>
                           
                        
                    </BrowserRouter> */}
                </div>
                <div className="footer-right">
                    {/* <h3>Tools</h3> */}
                    <div className="footer-social">
                        <SiGithub />
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
                        <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z" />
                        </svg>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z" /></svg>

                        <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"> <stop stop-color="#0091E6" offset="0%"> </stop> <stop stop-color="#0079BF" offset="100%"> </stop> </linearGradient> </defs> <g> <g> <rect fill='#333' x="0" y="0" width="256" height="256" rx="25"> </rect> <rect x="144.64" y="33.28" width="78.08" height="112" rx="12"> </rect> <rect x="33.28" y="33.28" width="78.08" height="176" rx="12"> </rect> </g> </g> </svg>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 470.699 470.699" xml:space="preserve"> <path d="M426.981,0H43.701C34.52,0,27.632,7.769,28.442,16.949L63.45,409.254c0.811,9.173,8.745,18.774,17.644,21.253 l138.006,38.335c8.887,2.463,23.413,2.479,32.313,0.032l138.177-38.281c8.901-2.472,16.835-11.986,17.645-21.175l35.023-392.469 C443.068,7.769,436.209,0,426.981,0z M360.51,141.611c-0.006,0.06-0.053,0.107-0.112,0.117c-0.06,0.01-0.118-0.021-0.144-0.077 L252.13,185.96c-1.54,0.631-2.418,2.264-2.098,3.897c0.322,1.633,1.754,2.811,3.419,2.811h84.103c4.474,0,8.736,1.9,11.728,5.227 c2.991,3.327,4.429,7.768,3.954,12.216l-13.141,123.273c-0.645,6.048-4.709,11.186-10.447,13.205l-89.269,31.41 c-3.362,1.184-7.027,1.193-10.397,0.025l-88.852-30.778c-5.773-2-9.871-7.153-10.52-13.228l-5.957-55.828 c-0.313-2.931,0.634-5.857,2.604-8.048c1.971-2.192,4.779-3.444,7.727-3.444h24.725c5.313,0,9.769,4.007,10.331,9.289l3.655,34.316 l61.521,21.385l61.803-21.58l7.559-71.17H129.835c-5.297,0-9.746-3.985-10.327-9.25l-3.327-30.164 c-0.508-4.601,2.088-8.982,6.366-10.745l111.837-46.109c1.269-0.523,1.99-1.868,1.724-3.214c-0.267-1.345-1.446-2.314-2.817-2.314 H115.542c-3.545,0-6.518-2.677-6.888-6.201l-3.406-32.421c-0.205-1.951,0.428-3.898,1.741-5.357 c1.313-1.458,3.184-2.291,5.146-2.291h246.379c1.973,0,3.852,0.842,5.166,2.313c1.314,1.472,1.938,3.434,1.715,5.394L360.51,141.611 z" /> </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.634 0 362.733 512"><path d="M107.644 470.877L74.634 100.62h362.733l-33.046 370.199L255.778 512z" /><path d="M256 480.522l120.03-33.276 28.24-316.352H256z" /><g fill="#333"><path d="M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zM256 386.153l-.198.053-50.575-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.209-.058z" /></g><path d="M108.382 0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.076V0h-.002zM205.994 22.896h-20.315V0h63.72v22.896h-20.325v46.148h-23.078l-.002-46.148zM259.511 0h24.062l14.802 24.26L313.163 0h24.072v69.044h-22.982V34.822l-15.877 24.549h-.396l-15.889-24.549v34.222h-22.579V0zM348.72 0h23.084v46.222h32.453v22.822H348.72V0z" /><g fill="#333"><path d="M255.844 268.217v45.41h55.917l-5.271 58.894-50.646 13.67v47.244l93.093-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zM255.844 176.305V221.716h109.687l.911-10.207 2.069-23.021 1.086-12.183z" /></g></svg>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" /></svg>
                        {/* Aggiungi qui le icone dei social media desiderati */}
                    </div>
                </div>

            </div>


            <div className="footer-bottom">
            <hr />
                <span>Copyright 2024 | </span>
                <span>Privacy Policy | Terms & Conditions</span>
                
            </div>
            
    
        </footer>
    );
}