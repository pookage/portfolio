import React from "react";
import s from "Shared/shapes.css";

function Triangle(props){

	const {
		className = ""
	} = props

	return(
		<svg
			className={`${s.shape} ${s.stroke}`}
			viewBox="0 0 20 20"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d=" M 0,10 L 20,20 L 20,0"
			/>
		</svg>
	);
}

function Twitter(props){
	const {
		className = ""
	} = props;
	return(
		<svg 
			className={className} 
			viewBox="0 0 562 560">
			<path 
				d="M178.936,505.585c209.376,0,323.946-173.63,323.946-323.946c0-4.885,0-9.77-0.222-14.655c22.203-15.985,41.52-36.19,56.84-59.06c-20.427,9.102-42.408,15.097-65.499,17.984c23.535-13.989,41.52-36.414,50.179-63.057c-21.98,13.1-46.404,22.425-72.382,27.531c-20.871-22.203-50.401-35.969-83.042-35.969c-62.835,0-113.902,51.067-113.902,113.903c0,8.881,1.11,17.54,2.887,25.978c-94.586-4.663-178.515-50.181-234.689-119.01c-9.769,16.874-15.32,36.413-15.32,57.285c0,39.521,20.205,74.38,50.624,94.807c-18.652-0.666-36.192-5.772-51.512-14.21c0,0.444,0,0.889,0,1.555c0,55.064,39.299,101.247,91.256,111.682c-9.547,2.664-19.539,3.996-29.976,3.996c-7.326,0-14.431-0.666-21.315-1.998c14.433,45.294,56.619,78.156,106.354,79.044c-39.078,30.641-88.147,48.847-141.435,48.847c-9.104,0-18.207-0.442-27.088-1.554C54.819,486.713,114.769,505.585,178.936,505.585"
			/>
		</svg>
	);
}//Twitter

function LinkedIn(props){
	const {
		className = ""
	} = props;

	return(
		<svg
			className={className} 
			viewBox="0 0 24 24">
			<path  
				d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
			/>
		</svg>
	);
}//LinkedIn

function Github(props){

	const {
		className = ""
	} = props;

	return(
		<svg
			className={className} 
			viewBox="0 0 32.579 31.774">
			<path 
				fillRule="evenodd" 
				clipRule="evenodd"  
				d="M16.289,0C7.294,0,0,7.293,0,16.291c0,7.197,4.667,13.302,11.141,15.457c0.814,0.148,1.112-0.354,1.112-0.785c0-0.387-0.014-1.412-0.022-2.771c-4.531,0.984-5.487-2.184-5.487-2.184c-0.741-1.881-1.809-2.383-1.809-2.383c-1.479-1.01,0.112-0.99,0.112-0.99c1.635,0.115,2.495,1.68,2.495,1.68c1.453,2.488,3.813,1.77,4.741,1.354c0.148-1.053,0.569-1.771,1.034-2.178c-3.617-0.412-7.42-1.809-7.42-8.051c0-1.778,0.635-3.232,1.677-4.371c-0.167-0.412-0.727-2.068,0.16-4.311c0,0,1.368-0.438,4.479,1.67c1.299-0.361,2.693-0.542,4.078-0.548c1.384,0.006,2.776,0.187,4.078,0.548c3.11-2.108,4.476-1.67,4.476-1.67c0.889,2.243,0.329,3.899,0.162,4.311c1.043,1.139,1.674,2.593,1.674,4.371c0,6.258-3.809,7.635-7.438,8.038c0.585,0.504,1.105,1.498,1.105,3.018c0,2.178-0.02,3.934-0.02,4.469c0,0.436,0.293,0.941,1.12,0.783c6.468-2.158,11.13-8.26,11.13-15.455C32.579,7.293,25.286,0,16.289,0z"
			/>
		</svg>
	);
}//Github

function Loading(props){
	const {
		className = ""
	} = props;

	return(
		<svg
			className={className} 
			viewBox="0 0 100 100" 
			preserveAspectRatio="xMidYMid">
			<rect 
				x="17.5" y="30" 
				width="15" height="40" 
				fill="#ef2d5e">
				<animate 
					attributeName="y" 
					calcMode="spline" 
					values="18;30;30" 
					keyTimes="0;0.5;1" 
					dur="1" 
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1" 
					begin="-0.2s" 
					repeatCount="indefinite">
				</animate>
				<animate 
					attributeName="height" 
					calcMode="spline" 
					values="64;40;40" 
					keyTimes="0;0.5;1" 
					dur="1" 
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1" 
					begin="-0.2s" 
					repeatCount="indefinite">
				</animate>
			</rect>
			<rect 
				x="42.5" y="30" 
				width="15" height="40" 
				fill="#ef2d5e">
				<animate 
					attributeName="y" 
					calcMode="spline" 
					values="20.999999999999996;30;30" 
					keyTimes="0;0.5;1" 
					dur="1" 
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1" 
					begin="-0.1s" 
					repeatCount="indefinite">
				</animate>
				<animate 
					attributeName="height" 
					calcMode="spline" 
					values="58.00000000000001;40;40" 
					keyTimes="0;0.5;1" 
					dur="1" 
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1" 
					begin="-0.1s" 
					repeatCount="indefinite">
				</animate>
			</rect>
			<rect 
				x="67.5" y="29.9946" 
				width="15" height="40.0108" 
				fill="#ef2d5e">
				<animate 
					attributeName="y" 
					calcMode="spline" 
					values="24;30;30" 
					keyTimes="0;0.5;1" 
					dur="1" 
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1" 
					begin="0s" 
					repeatCount="indefinite">
				</animate>
				<animate 
					attributeName="height" 
					calcMode="spline" 
					values="52;40;40" 
					keyTimes="0;0.5;1" 
					dur="1" 
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1" 
					begin="0s" 
					repeatCount="indefinite">
				</animate>
			</rect>
		</svg>
	);
}//Loading

export {
	Triangle,
	Twitter,
	LinkedIn,
	Github,
	Loading
}