import React from "react";

export default function Assets(){

	return [
		<a-asset-item key="bed-model"          id="bed-model"          src="assets/3d/bed/model.obj" />,
		<a-asset-item key="desk-model"         id="desk-model"         src="assets/3d/desk/model.obj" />,
		<a-asset-item key="lighthouse-model"   id="lighthouse-model"   src="assets/3d/lighthouse/model.obj" />,
		<a-asset-item key="plug-model"         id="plug-model"         src="assets/3d/plug/model.obj" />,
		<a-asset-item key="vive-model"         id="vive-model"         src="assets/3d/vive/model.obj" />,
		<a-asset-item key="box-model"          id="box-model"          src="assets/3d/box/model.obj" />,
		<a-asset-item key="kandinsky-font"     id="kandinsky-font"     src="assets/fonts/kandinsky/kandinsky.json" />,
		<a-asset-item key="consolas-font"      id="consolas-font"      src="assets/fonts/consolas/regular.json" />,
		<a-asset-item key="consolas-font-bold" id="consolas-font-bold" src="assets/fonts/consolas/bold.json" />
	];
}//Assets