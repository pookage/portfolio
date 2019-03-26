import React from "react";

export default function Assets(){

	return [
		<a-asset-item key="bed-model"          id="bed-model"          src="Assets/3d/bed/model.obj" />,
		<a-asset-item key="desk-model"         id="desk-model"         src="Assets/3d/desk/model.obj" />,
		<a-asset-item key="lighthouse-model"   id="lighthouse-model"   src="Assets/3d/lighthouse/model.obj" />,
		<a-asset-item key="plug-model"         id="plug-model"         src="Assets/3d/plug/model.obj" />,
		<a-asset-item key="vive-model"         id="vive-model"         src="Assets/3d/vive/model.obj" />,
		<a-asset-item key="box-model"          id="box-model"          src="Assets/3d/box/model.obj" />,
		<a-asset-item key="kandinsky-font"     id="kandinsky-font"     src="Assets/fonts/kandinsky/kandinsky.json" />,
		<a-asset-item key="consolas-font"      id="consolas-font"      src="Assets/fonts/consolas/regular.json" />,
		<a-asset-item key="consolas-font-bold" id="consolas-font-bold" src="Assets/fonts/consolas/bold.json" />
	];
}//Assets