export default function getMainHtml() {
	return `
	<div class="desktop"></div>
			<div class="taskbar">
				<div class="left">
					<div class="startButton taskbar-hover">
						<img src="assets/images/logo-light.png" alt="win" />
					</div>
					<div class="search">
						<img src="assets/images/search.svg" alt="search" />
						<input class="taskbar-search-input" type="text" placeholder="Search" />
						<img src="assets/images/mountain.png" alt="" />
					</div>

					<div class="taskbar-icons">
						<div class="icon task-view taskbar-hover">
							<img src="assets/images/task view.png" alt="" />
						</div>
					</div>
				</div>

				<div class="right">
					<div class="icon arrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="25"
							height="25"
							style="opacity: 0.8"
						>
							<path
								d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"
							></path>
						</svg>
					</div>
					<div class="icon cloud">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="20"
							height="20"
							viewBox="0 0 48 48"
						>
							<linearGradient
								id="NqAl5bicO~9wmXV3Tvu1Ra_PnENrLMMW4eV_gr1"
								x1="24.5"
								x2="24.5"
								y1="7.032"
								y2="22.852"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#0571bf"></stop>
								<stop offset="1" stop-color="#0268ba"></stop>
							</linearGradient>
							<path
								fill="url(#NqAl5bicO~9wmXV3Tvu1Ra_PnENrLMMW4eV_gr1)"
								d="M24.5,7C16.492,7,10,13.492,10,21.5S16.492,36,24.5,36S39,29.508,39,21.5S32.508,7,24.5,7	L24.5,7z"
							></path>
							<linearGradient
								id="NqAl5bicO~9wmXV3Tvu1Rb_PnENrLMMW4eV_gr2"
								x1="14.228"
								x2="14.228"
								y1="14.219"
								y2="32.761"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#1684da"></stop>
								<stop offset="1" stop-color="#107cd4"></stop>
							</linearGradient>
							<path
								fill="url(#NqAl5bicO~9wmXV3Tvu1Rb_PnENrLMMW4eV_gr2)"
								d="M16.155,14.972c-1.32-0.505-2.753-0.781-4.25-0.781C5.33,14.191,0,19.521,0,26.096	c0,2.476,0.757,4.774,2.05,6.678c0.061-0.026,16.445-6.889,26.406-10.888C22.952,18.568,17.903,15.641,16.155,14.972z"
							></path>
							<linearGradient
								id="NqAl5bicO~9wmXV3Tvu1Rc_PnENrLMMW4eV_gr3"
								x1="38.228"
								x2="38.228"
								y1="18.746"
								y2="34.097"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#138cdd"></stop>
								<stop offset="1" stop-color="#0c7dd4"></stop>
							</linearGradient>
							<path
								fill="url(#NqAl5bicO~9wmXV3Tvu1Rc_PnENrLMMW4eV_gr3)"
								d="M48,28.373c0-5.317-4.31-9.627-9.627-9.627c-0.997,0-1.958,0.152-2.863,0.433	c-0.996,0.31-3.652,1.342-7.054,2.708c8.377,5.05,17.79,10.996,18.252,11.288C47.525,31.76,48,30.123,48,28.373z"
							></path>
							<linearGradient
								id="NqAl5bicO~9wmXV3Tvu1Rd_PnENrLMMW4eV_gr4"
								x1="17.13"
								x2="31.145"
								y1="24.083"
								y2="41.333"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#27a7ea"></stop>
								<stop offset="1" stop-color="#1c94e3"></stop>
							</linearGradient>
							<path
								fill="url(#NqAl5bicO~9wmXV3Tvu1Rd_PnENrLMMW4eV_gr4)"
								d="M46.709,33.175c-0.463-0.292-9.875-6.238-18.252-11.288	C18.495,25.885,2.111,32.748,2.05,32.774C2.467,33.388,5.627,38,11.904,38c5.03,0,16.176,0,26.354,0	C43.669,38,46.148,34.146,46.709,33.175z"
							></path>
						</svg>
					</div>
					<div class="icon security">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="20"
							height="20"
							viewBox="0 0 48 48"
						>
							<path fill="#0370c8" d="M24,44c-0.552,0-1-0.448-1-1s0.448-1,1-1V44z"></path>
							<path
								fill="#0f5094"
								d="M25,43c0,0.552-0.448,1-1,1v-2C24.552,42,25,42.448,25,43z"
							></path>
							<circle cx="42" cy="11" r="1" fill="#0883d9"></circle>
							<circle cx="6" cy="11" r="1" fill="#33bff0"></circle>
							<path fill="#0f5094" d="M24,43l0.427,0.907c0,0,15.144-7.9,18.08-19.907H24V43z"></path>
							<path
								fill="#0883d9"
								d="M43,11l-1-1c-11.122,0-11.278-6-18-6v20h18.507C42.822,22.712,43,21.378,43,20C43,16.856,43,11,43,11	z"
							></path>
							<path
								fill="#0370c8"
								d="M24,43l-0.427,0.907c0,0-15.144-7.9-18.08-19.907H24V43z"
							></path>
							<path
								fill="#33bff0"
								d="M5,11l1-1c11.122,0,11.278-6,18-6v20H5.493C5.178,22.712,5,21.378,5,20C5,16.856,5,11,5,11z"
							></path>
						</svg>
					</div>
					<div class="icon keyboard">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-keyboard"
							viewBox="0 0 16 16"
						>
							<path
								d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
							/>
							<path
								d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25z"
							/>
						</svg>
					</div>
					<div class="icon lang">
						ENG
						<div style="margin-top: 3px">US</div>
					</div>
					<div class="icon wifi-sound">
						<img src="assets/images/wifi-line-icon.png" alt="" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="20"
							height="20"
							style="opacity: 0.7"
						>
							<path
								d="M6.60282 10.0001L10 7.22056V16.7796L6.60282 14.0001H3V10.0001H6.60282ZM2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"
							></path>
						</svg>
					</div>
					<div class="icon time">
						<div class="time-text">12:45 AM</div>
						<div class="date-text">6/21/2025</div>
					</div>
				</div>
			</div>
			<div class="calendar">
				<div class="calendar__picture">
					<h2>18, Sunday</h2>
					<h3>November</h3>
				</div>
				<div class="calendar__date">
					<div class="calendar__day">M</div>
					<div class="calendar__day">T</div>
					<div class="calendar__day">W</div>
					<div class="calendar__day">T</div>
					<div class="calendar__day">F</div>
					<div class="calendar__day">S</div>
					<div class="calendar__day">S</div>
					<div class="calendar__number"></div>
					<div class="calendar__number"></div>
					<div class="calendar__number"></div>
					<div class="calendar__number">1</div>
					<div class="calendar__number">2</div>
					<div class="calendar__number">3</div>
					<div class="calendar__number">4</div>
					<div class="calendar__number">5</div>
					<div class="calendar__number">6</div>
					<div class="calendar__number">7</div>
					<div class="calendar__number">8</div>
					<div class="calendar__number">9</div>
					<div class="calendar__number">10</div>
					<div class="calendar__number">11</div>
					<div class="calendar__number">12</div>
					<div class="calendar__number">13</div>
					<div class="calendar__number">14</div>
					<div class="calendar__number">15</div>
					<div class="calendar__number">16</div>
					<div class="calendar__number">17</div>
					<div class="calendar__number calendar__number--current">18</div>
					<div class="calendar__number">19</div>
					<div class="calendar__number">20</div>
					<div class="calendar__number">21</div>
					<div class="calendar__number">22</div>
					<div class="calendar__number">23</div>
					<div class="calendar__number">24</div>
					<div class="calendar__number">25</div>
					<div class="calendar__number">26</div>
					<div class="calendar__number">27</div>
					<div class="calendar__number">28</div>
					<div class="calendar__number">29</div>
					<div class="calendar__number">30</div>
				</div>
			</div>
			<div class="control-layout">
				<div class="row">
					<div class="div wifi">
						<div class="icons">
							<img src="assets/images/wifi-line-icon.png" alt="" />
							<img src="assets/images/chevron-right.png" alt="" />
						</div>
						Asad Ali
					</div>
					<div class="div bluetooth">
						<div class="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="20"
							>
								<path
									d="M14.3116 12L18.6548 16.3431L12.9979 22H10.9979V15.3137L6.63394 19.6777L5.21973 18.2635L10.9979 12.4853V11.5147L5.21973 5.73654L6.63394 4.32233L10.9979 8.68629V2H12.9979L18.6548 7.65685L14.3116 12ZM12.9979 13.5147V19.1716L15.8263 16.3431L12.9979 13.5147ZM12.9979 10.4853L15.8263 7.65685L12.9979 4.82843V10.4853Z"
								></path>
							</svg>
							<img src="assets/images/chevron-right.png" alt="" />
						</div>
						Bluetooth
					</div>
					<div class="div wifi">
						<div class="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="20"
							>
								<path
									d="M12 13L18 22H6L12 13ZM12 16.6L9.74 20H14.26L12 16.6ZM10.9393 10.5606C10.3536 9.97486 10.3536 9.02511 10.9393 8.43933C11.5251 7.85354 12.4749 7.85354 13.0607 8.43933C13.6464 9.02511 13.6464 9.97486 13.0607 10.5606C12.4749 11.1464 11.5251 11.1464 10.9393 10.5606ZM5.28249 2.78247L6.6967 4.19668C3.76777 7.12562 3.76777 11.8744 6.6967 14.8033L5.28249 16.2175C1.5725 12.5075 1.5725 6.49245 5.28249 2.78247ZM18.7175 2.78247C22.4275 6.49245 22.4275 12.5075 18.7175 16.2175L17.3033 14.8033C20.2322 11.8744 20.2322 7.12562 17.3033 4.19668L18.7175 2.78247ZM8.11091 5.6109L9.52513 7.02511C8.15829 8.39195 8.15829 10.608 9.52513 11.9749L8.11091 13.3891C5.96303 11.2412 5.96303 7.75878 8.11091 5.6109H8.11091ZM15.8891 5.6109C18.037 7.75878 18.037 11.2412 15.8891 13.3891L14.4749 11.9749C15.8417 10.608 15.8417 8.39195 14.4749 7.02511L15.8891 5.6109Z"
								></path>
							</svg>
						</div>
						Hotspot
					</div>
				</div>
				<div class="row">
					<div class="div wifi">
						<div class="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="20"
							>
								<path
									d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
								></path>
							</svg>
						</div>
						Light
					</div>
					<div class="div bluetooth">
						<div class="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="20"
							>
								<path
									d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"
								></path>
							</svg>
						</div>
						Aero Plane
					</div>
					<div class="div wifi">
						<div class="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="20"
							>
								<path
									d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
								></path>
							</svg>
						</div>
						Energy Saver
					</div>
				</div>
				<hr />
				<div class="sliders">
					<div class="sound">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20">
							<path
								d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 	6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"
							></path>
						</svg>
						<input min="0" max="100" value="50" type="range" />
						<p>50%</p>
					</div>
					<div class="brigthness">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20">
							<path
								d="M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM12 19.9967C16.4183 19.9967 20 16.415 20 11.9967C20 7.57843 16.4183 3.9967 12 3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967ZM12 17.9967V5.9967C15.3137 5.9967 18 8.683 18 11.9967C18 15.3104 15.3137 17.9967 12 17.9967Z"
							></path>
						</svg>
						<input min="0" max="100" value="70" type="range" />
						<p>70%</p>
					</div>
				</div>
			</div>
			<div class="custom-menu" id="customMenu">
				<ul>
					<li class="refresh">Refresh</li>
					<li class="new-folder">New Folder</li>
					<li class="new-note">New Note</li>
					<li>Settings</li>
					<li>Terminal</li>
					<li class="change-bg">Change Wallpaper</li>
					<li>About</li>
				</ul>
			</div>
			<img class="start-img" src="assets/images/start-menu.jpg" alt="" />
			<div class="branding">
				<div>
					<img src="assets/images/sheryOS.png" alt="" />
					SHERY OS
				</div>
				<div>by: ASAD ALI</div>
			</div>
			<div class="search-panel" id="searchPanel" style="display: none">
				<div class="search-panel-results"></div>
			</div>
`;
}
